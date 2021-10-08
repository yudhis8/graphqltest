import {useQuery} from '@apollo/client';
import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {GET_LIST} from './hooks/queries/GetList.queries';


const Home = (props) => {
    const {data, loading, error} = useQuery(GET_LIST);
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.launches}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
