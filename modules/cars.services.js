import cloudinary from "cloudinary";
import mongoose from "mongoose";
import Cars from "./cars.model";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class CarsServices {
  async getAllCars({ skip, limit }) {
    const cars = await Cars.find().skip(skip).limit(limit).sort({ date: -1 });
    const count = await Cars.countDocuments();
    return { cars, count };
  }

  async getCarById({ id }) {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Not valid ID format");
    }
    const car = await Cars.findById(id);
    if (!car) {
      throw new Error("Car not found");
    }
    return car;
  }

  async addCar({ car, upload }) {
    await cloudinary.v2.uploader
      .upload(upload, {
        upload_preset: "ml_default",
        use_filename: true,
      })
      .then(async (result) => {
        const { url, public_id } = result;
        car.photo = url;
        car.public_id = public_id;
        return await new Cars(car).save();
      })
      .catch((e) => {
        throw new Error("Image not provided");
      });
  }

  async updateCar({ id, car, upload }) {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Not valid ID format");
    }
    const foundCar = await Cars.findById(id);
    if (!foundCar) {
      throw new Error("Car not found");
    }
    if (upload) {
      await cloudinary.v2.uploader.destroy(foundCar.public_id);

      return await cloudinary.v2.uploader
        .upload(upload, {
          upload_preset: "ml_default",
          use_filename: true,
        })
        .then(async (result) => {
          const { url, public_id } = result;
          car.photo = url;
          car.public_id = public_id;
          return await Cars.findByIdAndUpdate(id, { $set: car }, { new: true });
        });
    }
    return Cars.findByIdAndUpdate(id, { $set: car }, { new: true });
  }

  async deleteCar({ id }) {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Not valid ID format");
    }
    const car = await Cars.findByIdAndDelete(id);
    if (!car) {
      throw new Error("Car not found");
    }
    await cloudinary.v2.uploader.destroy(car.public_id);
    return car;
  }

  async getFilteredCars({ filter, skip, limit }) {
    const filters = this.configureFilter(filter);
    const cars = await Cars.find(filters).skip(skip).limit(limit);
    const count = await Cars.find(filters).countDocuments();

    return { cars, count };
  }

  configureFilter(data) {
    const filter = {};
    const {
      brand = "",
      model = "",
      minYear = 1990,
      maxYear = 2022,
      minPrice = 0,
      maxPrice = 222222,
      color = "",
      searchText = "",
    } = data;

    if (brand) {
      filter.brand = new RegExp(brand, "i");
    }

    if (model) {
      filter.model = new RegExp(model, "i");
    }

    if (minPrice) {
      filter.price = { $gte: +minPrice, $lte: minPrice };
    }

    if (maxPrice) {
      filter.price = { $gte: minPrice, $lte: +maxPrice };
    }

    if (minYear) {
      filter.year = { $gte: +minYear, $lte: +maxYear };
    }

    if (maxYear) {
      filter.year = { $gte: +minYear, $lte: +maxYear };
    }

    if (color) {
      filter.externalColor = new RegExp(color, "i");
    }
    if (searchText) {
      filter.description = new RegExp(searchText, "i");
    }

    return filter;
  }
}

export default new CarsServices();
