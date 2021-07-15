import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RiwayatComponent from '../../components/profile/list/Riwayat.component';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';


const RiwayatScreen = ({ riwayat }) => {


    return (
        <View style={styles.container}>
            <RiwayatComponent
            // data='good'
            ></RiwayatComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    // body: {
    //     width: '90%',
    //     flex: 1,
    //     // borderColor: '#ccc',
    //     // borderWidth: 5,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }

});

export default RiwayatScreen;