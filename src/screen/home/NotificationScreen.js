import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.containerBody}>
                    <Text style={styles.text}>Kamu belum punya notifikasi :)</Text>
                </View>
            </View>
        </SafeAreaView>
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

export default NotificationScreen;