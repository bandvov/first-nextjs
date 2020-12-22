import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Filters from '../components/filters';
import { CarListItem } from '../components/car-list-item/car-list-item';
import MainLayout from '../components/main-layout';
import styles from '../styles/Home.module.css';
import { getFilteredCars } from '../operations/car-operations';
import { MainContext } from '../context/mainContext';
import CustomCircularProgress from '../components/circularProgress/circularProgress';

export default function Search({ cars = [] }) {
  const { state, send } = useContext(MainContext);

  useEffect(() => {
    send({ type: 'SET_LOADING', loading: false });
  }, [cars]);
  
  const mapped = cars.map((car) => <CarListItem key={car._id} {...car} />);

  return (
    <MainLayout>
      <Filters />
      {state.context.loading ? (
        <CustomCircularProgress />
      ) : (
        cars && <Card className={styles.cars}>{mapped}</Card>
      )}
    </MainLayout>
  );
}

Search.getInitialProps = async (ctx) => {
  const cars = await getFilteredCars(ctx.query);
  return {
    cars,
  };
};

Search.propTypes = PropTypes.shape({
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      model: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}).isRequired;
