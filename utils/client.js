import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

    export const client = new ApolloClient({
  uri: `https://vcars.herokuapp.com/api/graphql`,
  cache: new InMemoryCache({ addTypename: false }).restore({}),
});
