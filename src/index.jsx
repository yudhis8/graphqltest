import {useQuery} from '@apollo/client';
import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { HeaderComponent, ListItem } from './component';
import { client } from './helper/AppoloClient.Helper';
import {GET_LIST} from './hooks/queries/GetList.queries';


const Home = (props) => {
    const [loadMore, setLoadMore] = React.useState(false)
    const [dataItem, setDataItem] = React.useState([])
    const [item, setItem] = React.useState([])
    const {data, loading, error} = useQuery(GET_LIST, {variables: {
      after: ""
    }});

    React.useEffect(() => {
      setDataItem(data?.launches?.launches)
      setItem(data?.launches)
    }, [data])

    const onLoadMore = () =>{
      if(data?.launches?.hasMore && !loadMore){
        setLoadMore(true)
        client
          .query({
            query: GET_LIST,
            variables :{
              after: item?.cursor
            }
          })
          .then(result => {
            setLoadMore(false)
            setItem(result?.data?.launches)
            setDataItem(
              [...dataItem, ...result?.data?.launches?.launches]
            )
          });
      }
    }
    
  return (
    <View>
      <HeaderComponent title='Launcher'/>
      <FlatList
        data={dataItem}
        renderItem={({item, index}) => (
          <ListItem key={'listLauncher' + index} item={item} />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        ListEmptyComponent={()=>{
          return <ActivityIndicator size="large" color="#5A30F5"/>
        }}
        onEndReachedThreshold={0.1}
        onEndReached={onLoadMore}
        ListFooterComponent={()=>{
          return <>{loadMore && <ActivityIndicator size="large" color="#5A30F5"/>}</>
        }}
      />
    </View>
  );
};

export default Home;
