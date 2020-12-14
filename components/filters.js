import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { colors, brands, years } from '../configs';
import { MainContext } from '../context/mainContext';
import BrandFacet from './facets/brand.facet';

export default function Filters() {
  const { state, send } = useContext(MainContext);
  const router = useRouter();
  useEffect(() => {
    if (router.route !== '/') {
      if (
        (!state.context.filter.brand &&
          router.query.brand &&
          router.query.brand !== state.context.filter.brand) ||
        (!state.context.filter.color &&
          router.query.color &&
          router.query.color !== state.context.filter.color) ||
        (!state.context.filter.year &&
          router.query.year &&
          router.query.year !== state.context.filter.year)
      ) {
        send({
          type: 'SET_FILTERS',
          filter: {
            brand: router.query.brand,
            color: router.query.color,
            year: router.query.year,
          },
        });
      }
    }
  }, []);

  return (
    <div style={{ display: 'flex', height: '4rem', alignItems: 'center' }}>
      <BrandFacet data={brands} name="brand" />
      <BrandFacet data={colors} name="color" />
      <BrandFacet data={years} name="year" />
    </div>
  );
}
