import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const FavoriteScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <Text style={styles.text}>Kamu belum punya favorite :)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    containerBody: {
        width: "80%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('window').width / 20,
        textAlign: 'center'
    }
});

export default FavoriteScreen;