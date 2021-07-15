import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TentangComponent from '../../components/profile/list/Tentang.component';

const TentangScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.body}> */}
            <TentangComponent></TentangComponent>
            {/* </View> */}
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
    body: {
        width: '90%',
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 5,
    }

});

export default TentangScreen;