import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Filters from '../components/filters';
import { CarListItem } from '../components/car-list-item/car-list-item';
import MainLayout from '../components/main-layout';
import styles from '../styles/Home.module.css';
import { getFilteredCars } from '../operations/car-operations';
import { MainContext } from '../context/mainContext';
import CustomCircularProgress from '../components/circularProgress/circularProgress';

export default function Search({ cars = [], count }) {
  const { state, send } = useContext(MainContext);

  useEffect(() => {
    send({ type: 'SET_LOADING', loading: false });
  }, [cars]);
  const setPageHandler = (e, value) => {
    send({ type: 'SET_CURRENT_PAGE', currentPage: value });
  };
  const mapped = cars.map((car) => <CarListItem key={car._id} {...car} />);
  console.log(Math.round(count / 15));
  return (
    <MainLayout>
      <Filters />
      {state.context.loading ? (
        <CustomCircularProgress />
      ) : (
        cars && <Card className={styles.cars}>{mapped}</Card>
      )}

      <Pagination
        style={{ marginTop: '1rem' }}
        color="primary"
        count={Math.round(count / 15)}
        defaultPage={1}
        page={state.context.currentPage}
        showFirstButton
        showLastButton
        onChange={setPageHandler}
      />
    </MainLayout>
  );
}

Search.getInitialProps = async (ctx) => {
  const { cars, count } = await getFilteredCars(ctx.query, 0, 15);

  return {
    cars,
    count,
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
