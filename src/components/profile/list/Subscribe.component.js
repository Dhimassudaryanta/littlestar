import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SubscribeComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Kamu belum subscribe loh :)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: '#ccc',
        // borderWidth: 5,
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('window').height / 45,
        textAlign: 'center'
    }
})

export default SubscribeComponent;