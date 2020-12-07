import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import { FormControlLabel } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import '../styles/filter.module.scss';
import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../context/mainContext';
import { years, colors, brands } from '../configs';

export default function Filters() {
  const { state, send } = useContext(MainContext);
  const router = useRouter();
  
  const fetchData = useCallback(() => {
    router.push({ pathname: '/search', query: state.context.filter });
  
  }, [state.context.filter]);

  const brandChangeHandler = (e) => {
    if (e.target.checked) {
      send({
        type: 'ADD_BRANDS',
        brand: [...state.context.filter.brand, e.target.value],
      });
      fetchData();
      return;
    }

    send({
      type: 'ADD_BRANDS',
      brand: state.context.filter.brand.filter(
        (value) => value !== e.target.value
      ),
    });
    fetchData();
  };

  const mappedBrands = brands.map((value) => (
    <FormGroup className="filter-list-item" key={value} aria-label={value}>
      <FormControlLabel
        checked={state.context.filter.brand.includes(value)}
        onChange={brandChangeHandler}
        value={value}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));
  const mappedColors = colors.map((value) => (
    <FormGroup className="filter-list-item" key={value} aria-label={value}>
      <FormControlLabel
        value={value}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));

  const mappedYears = years.map((value) => (
    <FormGroup className="filter-list-item" key={value} aria-label={value}>
      <FormControlLabel
        onChange={brandChangeHandler}
        value={value}
        control={<Checkbox color="primary" />}
        label={value}
        labelPlacement="end"
      />
    </FormGroup>
  ));
  return (
    <div style={{ display: 'flex' }}>
      <List>{mappedBrands}</List>
      <List>{mappedColors}</List>
    </div>
  );
}
