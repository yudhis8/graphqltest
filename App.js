import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Home from './src';
import {client} from './src/helper/AppoloClient.Helper';

const HomeComponent = ({params}) => {
  return (
    <ApolloProvider client={client}>
      <StatusBar backgroundColor={'#2B208C'} />
      <Home />
    </ApolloProvider>
  );
};

export default HomeComponent;
