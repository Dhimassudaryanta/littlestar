import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = () => {

    return (
        <SafeAreaView style={{ borderColor: "#ccc", borderWidth: 1, flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.containerBody}>
                    <Text>This is ProfileScreen</Text>
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
        // justifyContent: "center"
    }
});

export default NotificationScreen;