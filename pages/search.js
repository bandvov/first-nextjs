import Filter from '../components/filters';
import MainLayout from '../components/main-layout';
import { getFilteredCars } from '../operations/car-operations';

export default function Search({ cars }) {
  return (
    <MainLayout>
      search
      <Filter />
      <pre>{JSON.stringify(cars, null, 2)}</pre>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const cars = await getFilteredCars(ctx.query);
  return {
    props: {
      cars,
    },
  };
}
