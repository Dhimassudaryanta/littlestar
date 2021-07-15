import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ProfileComponent from '../../components/profile/Profile.component';
import ListComponent from '../../components/profile/List.component';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

//redux
import { connect } from 'react-redux';

const ProfileScreen = ({ navigation, getUser }) => {

    const [user, setUser] = useState('');


    useEffect(() => {

        setUser(getUser);
        console.log("wkwkwk")


    }, [getUser]);

    console.log(getUser);
    //fonts
    let [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/font/Poppins-Light.ttf'),
        'TallyText-Bold': require('../../../assets/font/TallyText-Bold.ttf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    //


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ProfileComponent
                        passUser={user}
                    ></ProfileComponent>
                </View>
                <View style={styles.list}>
                    <ListComponent
                        navigation={navigation}
                        passUser={user}
                    ></ListComponent>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        // borderColor: '#ccc',
        // borderWidth: 5,
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        // borderColor: '#ccc',
        // borderWidth: 5
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height / 3,
        // borderColor: '#ccc',
        // borderWidth: 5
    },
    list: {
        flex: 1,
        width: '100%',
        // borderColor: '#ccc',
        // borderWidth: 5
    },
    containerBody: {
        // width: "100%",
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // borderColor: '#ccc',
        // borderWidth: 5

    }
});


const mapStateToProps = state => {
    return { getUser: state.auth }
}

export default connect(mapStateToProps)(ProfileScreen);