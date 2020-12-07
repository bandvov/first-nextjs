import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Link from 'next/link';
import { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { deleteCar } from '../../operations/car-operations';
import { useStyles } from './car-details.styles';

export default function CarDetails({ car }) {
  const { photo, ...carDetails } = car;
  const classes = useStyles();
  const { send } = useContext(MainContext);

  const deleteHandler = () => {
    send({
      type: 'SHOW',
      text: 'Are you sure you want to delete the car?',
      handler: () => deleteCar(car._id),
      push: () => Router.push('/'),
    });
  };
  const carEntries = Object.entries(carDetails);
  const mappedCarDetails = carEntries.map((detail) => (
    <li key={detail}>
      <Typography gutterBottom variant="subtitle1">
        <b>{detail[0]}: </b>
        {detail[1]}
      </Typography>
    </li>
  ));
  return (
    <Paper className={classes.root}>
      <Typography className={classes.image}>
        <img
          alt={`${carDetails.brand} ${carDetails.model} ${carDetails.year}`}
          className={classes.img}
          src={photo}
        />
      </Typography>
      <Typography className={classes.text}>
        <Typography component="div">{mappedCarDetails}</Typography>
        <Typography className={classes.deleteButton}>
          <Link href="/car/edit">
            <Button variant="outlined">edit</Button>
          </Link>
          <Button type="button" onClick={deleteHandler} variant="contained">
            delete
          </Button>
        </Typography>
      </Typography>
    </Paper>
  );
}

CarDetails.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
