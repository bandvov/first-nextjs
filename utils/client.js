import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const PORT = process.env.PORT || 3000;

export const client = new ApolloClient({
  uri: `http://localhost:${PORT}/api/graphql`,
  cache: new InMemoryCache({ addTypename: false }).restore({}),
});
