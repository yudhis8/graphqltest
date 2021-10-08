import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {Text, View} from 'react-native';
import Home from './src';
import {client} from './src/helper/AppoloClient.Helper';

const HomeComponent = ({params}) => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default HomeComponent;
