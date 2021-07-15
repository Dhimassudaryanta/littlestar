import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ActivityComponent from '../../components/activity/Activity.component';

const ActivityScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <ActivityComponent></ActivityComponent>
            </View>
            <View style={styles.loading}>
                <Text style={styles.text}>Subscribe dulu yuk :)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
        // borderColor: "#ccc",
        // borderWidth: 5
    },
    containerBody: {
        width: "90%",
        flex: 1,
        // borderColor: "#ccc",
        // borderWidth: 5
    },
    text: {
        fontFamily: 'TallyText-Bold',
        fontSize: Dimensions.get('window').width / 10,
        color: 'white'
    },
    loading: {
        // flex: 1,
        // borderWidth: 5,
        // borderColor: '#ccc',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.6,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ActivityScreen;