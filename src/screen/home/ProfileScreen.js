import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <Text>This is Profile Screen</Text>
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
    }
});

export default ProfileScreen;