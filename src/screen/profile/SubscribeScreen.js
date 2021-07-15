import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubscribeComponent from '../../components/profile/list/Subscribe.component';

const SubscribeScreen = () => {
    return (
        <View style={styles.container}>
            <SubscribeComponent
                data="good"
            ></SubscribeComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    // body: {
    //     width: '90%',
    //     flex: 1,
    //     borderColor: '#ccc',
    //     borderWidth: 5,
    // }

});

export default SubscribeScreen;