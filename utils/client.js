import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const PORT = process.env.PORT || 3000;
const path =
  process.env.NODE_ENV === 'production'
    ? 'https://vcars.herokuapp.com'
    : `http://localhost:${PORT}`;
console.log(process.env.NODE_ENV);
export const client = new ApolloClient({
  uri: `${path}/api/graphql`,
  cache: new InMemoryCache({ addTypename: false }).restore({}),
});
