import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import MainLayout from '../../components/main-layout';
import CarDetails from '../../components/car-details/car-details';
import { getCarById } from '../../operations/car-operations';
import { MainContext } from '../../context/mainContext';
import CustomCircularProgress from '../../components/circularProgress/circularProgress';
import 'react-toastify/dist/ReactToastify.css';

export default function OneCar({ car = {}, error }) {
  const { state, send } = useContext(MainContext);

  useEffect(() => {
    send({ type: 'SET_LOADING', loading: false });
  }, [car]);

  const showError = () => {
    if (error) {
      toast.dark(error, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };
  return (
    <MainLayout>
      {state.context.loading ? (
        <CustomCircularProgress />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <CarDetails car={car} showError={showError} />
      )}
      <ToastContainer />
    </MainLayout>
  );
}
export async function getServerSideProps(ctx) {
  const car = await getCarById(ctx.params.id);

  if (car.error) {
    return {
      props: {
        error: car.error,
      },
    };
  }

  return {
    props: {
      car,
    },
  };
}

OneCar.propTypes = {
  car: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  error: PropTypes.string,
};

OneCar.defaultProps = {
  error: '',
};
