import {useQuery} from '@apollo/client';
import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { HeaderComponent } from './component';
import ListItem from './component/listItem';
import {GET_LIST} from './hooks/queries/GetList.queries';


const Home = (props) => {
    const {data, loading, error} = useQuery(GET_LIST, {variables: {
      after: ""
    }});
  return (
    <View style={styles.container}>
      <HeaderComponent title='Launcher'/>
      <FlatList
        data={data?.launches?.launches}
        renderItem={({item, index}) => (
          <ListItem key={'listLauncher' + index} item={item} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
