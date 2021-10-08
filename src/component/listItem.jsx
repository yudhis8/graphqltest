import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) =>{
    const {item} = props
    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <View style={[styles.body, {alignItems: 'center'}]}>
                    <Text style={styles.textBold}>{item?.site}</Text>
                </View>  
            </View>
            <View style={styles.row}>
                <Image
                    source={item?.mission?.missionPatch ? {uri: item?.mission?.missionPatch} : require('./../assets/images/default.png')}
                    style={styles.image}
                    resizeMethod={'resize'}
                />
                <View style={styles.body}>
                    <Text style={styles.text}>Rocket Name: {item?.rocket?.name}</Text>
                    <Text style={styles.text}>Rocket Type: {item?.rocket?.type}</Text>
                    <Text style={styles.text}>Mission Name: {item?.mission?.name}</Text>
                </View>
            </View>
            <View style={styles.divider}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    topArea: {
        width: '100%',
        alignItems: 'flex-end'
    },
    row: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    text: {
        color: '#7E7E7E',
        fontSize: 16,
    },
    textBold: {
        color: '#7E7E7E',
        fontSize: 20,
        fontWeight: 'bold'

    },
    image: {
        aspectRatio: 1/1,
        width: '30%',
        resizeMode: 'stretch',
    },
    body: {
        width: '65%',
    },
    divider: {
        backgroundColor: '#DBDBDB',
        height: 5,
        width: '100%',
        marginVertical: 10
    }
})

ListItem.propTypes = {
    data: PropTypes.object
}

ListItem.defaultProps = {
    data: {}
}


export default ListItem;
