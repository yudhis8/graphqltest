import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';

import {ErrorResponse, onError} from '@apollo/client/link/error';
import {GraphQLError} from 'graphql';
import {Alert} from 'react-native';

const errorLink = onError(({graphQLErrors}: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors?.map(({message}: GraphQLError) => {
      Alert.alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({uri: 'https://apollo-fullstack-tutorial.herokuapp.com/'}),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
