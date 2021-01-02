import cloudinary from 'cloudinary';
import Cars from './cars.model';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class CarsServices {
  async getAllCars({ skip, limit }) {
    const cars = await Cars.find().skip(skip).limit(limit).sort({ year: -1 });
    const count = await Cars.countDocuments();
    return { cars, count };
  }

  async getCarById({ id }) {
    const car = await Cars.findById(id);
    if (!car) {
      throw new Error('car not found');
    }
    return car;
  }

  async addCar({ car, upload }) {
    
    return await new Cars(car).save();
  }

  updateCar({ id, car }) {
    return Cars.findByIdAndUpdate(id, { $set: car }, { new: true });
  }

  deleteCar({ id }) {
    return Cars.findByIdAndDelete(id);
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
      brand = '',
      model = '',
      minYear = 1990,
      maxYear = 2022,
      minPrice = 0,
      maxPrice = 222222,
      color = '',
      searchText = '',
    } = data;

    if (brand) {
      filter.brand = new RegExp(brand, 'i');
    }

    if (model) {
      filter.model = new RegExp(model, 'i');
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
      filter.colorSimpleName = new RegExp(color, 'i');
    }
    if (searchText) {
      filter.description = new RegExp(searchText, 'i');
    }

    return filter;
  }
}

export default new CarsServices();
