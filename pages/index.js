import PropTypes from 'prop-types';
import MainLayout from '../components/main-layout';
import Filters from '../components/filters';
import { CarListItem } from '../components/car-list-item/car-list-item';
import styles from '../styles/Home.module.css';
import { getFilteredCars } from '../operations/car-operations';

export default function Home({ cars }) {
 
  const mappedCars = cars.map((value) => (
    <CarListItem
      key={value._id}
      id={value._id}
      brand={value.brand}
      model={value.model}
      photo={value.photo}
      price={value.price}
      year={value.year}
    />
  ));

  return (
    <MainLayout>
      <Filters />
      <div className={styles.cars}>{mappedCars}</div>
    </MainLayout>
  );
}

Home.getInitialProps = async (ctx) => {
  if (ctx.query) {
    const cars = await getFilteredCars(ctx.query);
    return {
      cars,
    };
  }
};

Home.propTypes = PropTypes.shape({
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      categories: PropTypes.string.isRequired,
      colorSimpleName: PropTypes.string.isRequired,
      engine: PropTypes.string.isRequired,
      externalColor: PropTypes.string.isRequired,
      firstOwner: PropTypes.bool.isRequired,
      mileage: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      transmission: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}).isRequired;
