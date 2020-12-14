import { brands } from '../configs';
import Cars from './cars.model';

class CarsServices {
  getAllCars() {
    return Cars.find();
  }

  getCarById({ id }) {
    return Cars.findById(id);
  }

  async addCar({ car }) {
    return await new Cars(car).save();
  }

  async updateCar({ id, car }) {
    return await Cars.findByIdAndUpdate(id, { $set: car }, { new: true });
  }

  deleteCar({ id }) {
    return Cars.findByIdAndDelete(id);
  }

  getFilteredCars({ filter }) {
    const filters = this.configureFilter(filter);
    return Cars.find(filters);
  }

  configureFilter(data) {
    const filter = {};
    let { brand, model, year = [], color, searchText } = data;
    brand = brand.filter((item) => item !== '');
    color = color.filter((item) => item !== '');
    year = year.filter((item) => item !== '');
    if (brand) {
      filter.brand = new RegExp(brand, 'i');
    }
    if (model) {
      filter.model = { $in: model.map((value) => new RegExp(value, 'i')) };
    }
    if (year.length) {
      filter.year = { $in: year.map((value) => +value) };
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
