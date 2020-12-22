import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, Card } from '@material-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useStyles } from './car-list-item.styles';

export function CarListItem({
  _id,
  brand,
  model,
  price,
  year,
  photo,
  mileage,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.paper}>
        <Grid container spacing={2}>
          <Link href="/car/:id" as={`/car/${_id}`}>
            <Grid xs={12} sm={12} md={5} item>
              <img alt={model} src={photo} className={classes.image} />
            </Grid>
          </Link>
          <Grid
            className={classes.textDiv}
            item
            xs={12}
            sm={12}
            md={7}
            container
          >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {brand} {model}
                </Typography>
                <Typography>
                  Year:
                  {year}
                </Typography>
                <Typography>
                  Mileage:
                  {mileage}
                </Typography>
              </Grid>
              <Grid className={classes.buttonDiv}>
                <Link href="/car/:id" as={`/car/${_id}`}>
                  <a>
                    <Button>show more</Button>
                  </a>
                </Link>
              </Grid>
            </Grid>
            <Grid>
              <Typography component="h5" gutterBottom>
                {`$ ${price}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

CarListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
};
