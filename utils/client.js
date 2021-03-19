import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const PORT = process.env.PORT || 3000;
const path = process.env.ENV;
const basePath =
  path === 'development'
    ? `http://localhost:${PORT}`
    : 'https://vcars.herokuapp.com';

    export const client = new ApolloClient({
  uri: `${basePath}/api/graphql`,
  cache: new InMemoryCache({ addTypename: false }).restore({}),
});
