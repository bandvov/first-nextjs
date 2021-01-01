import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import MainLayout from '../../components/main-layout';
import CarDetails from '../../components/car-details/car-details';
import { getCarById, getCarsId } from '../../operations/car-operations';
import { MainContext } from '../../context/mainContext';
import CustomCircularProgress from '../../components/circularProgress/circularProgress';

export default function OneCar({ car = {} }) {
  const { state, send } = useContext(MainContext);

  useEffect(() => {
    send({ type: 'SET_LOADING', loading: false });
  }, [car]);

  return (
    <MainLayout>
      {state.context.loading ? (
        <CustomCircularProgress ress />
      ) : (
        <CarDetails car={car} />
      )}
    </MainLayout>
  );
}
export async function getServerSideProps(ctx) {
  const car = await getCarById(ctx.params.id);

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
};
