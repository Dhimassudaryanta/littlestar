import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

    return (

        <SafeAreaView style={{
            // borderColor: "#ccc",
            //  borderWidth: 1, 
            flex: 1
        }}>
            <View style={styles.container}>
                <View style={styles.containerBody}>
                    <Text>This is HomeScreen</Text>
                </View>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        // borderWidth: 1,
        // borderColor: "#ccc"
    },
    containerBody: {
        width: "80%",
        flex: 1,
        alignItems: "center",
        // justifyContent: "center"

    }
});

export default HomeScreen;