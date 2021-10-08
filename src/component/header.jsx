import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const HeaderComponent = (props) =>{
    const {title} = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#5A30F5',
        paddingHorizontal: 20,
        elevation: 6
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})

HeaderComponent.propTypes = {
    title: PropTypes.string
}

HeaderComponent.defaultProps = {
    title: ''
}


export default HeaderComponent;
