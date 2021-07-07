import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import FooterSocial from '../../components/footer/FooterSocial.component';
import FormLogin from '../../components/form/FormLogin.component';
import Colors from '../../colors';
import Logo from '../../components/header/Logo.component';

import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

const SignIn = ({ navigation }) => {

    //fonts
    let [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/font/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    //

    const onLoginHandler = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.logo}>
                    <View style={styles.imageContainer}>
                        <Logo></Logo>
                    </View>
                </View>
                <View style={styles.form}>
                    <FormLogin initialValues="SignUp"></FormLogin>
                </View>
                <View>
                    <FooterSocial></FooterSocial>
                </View>
                <View style={{ flexDirection: "row" }}>

                    <Text style={{
                        textAlignVertical: "center",
                        fontFamily: 'Poppins-Light',
                        fontSize: Dimensions.get('window').height / 45
                    }}>Already have an account ? </Text>
                    <TouchableOpacity onPress={onLoginHandler}>
                        <Text style={{
                            color: Colors.secondColor,
                            fontFamily: 'Poppins-Light',
                            fontSize: Dimensions.get('window').height / 35
                        }}>  Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // borderColor: "#ccc",
        // borderWidth: 10,
        // justifyContent: "flex-end",
        alignItems: "center"
    },
    body: {
        // paddingVertical: Dimensions.get('window').height / 15,
        flex: 1,
        width: "85%",
        backgroundColor: 'white',
        // justifyContent: "space-between",
        // borderColor: "#ccc",
        // borderWidth: 5,
        alignItems: "center"
    },
    logo: {

        height: Dimensions.get('window').height / 3,
        width: "100%",
        alignItems: "center",
        // borderColor: "#ccc",
        // borderWidth: 5,
        justifyContent: "flex-end",
    },
    imageContainer: {
        height: Dimensions.get('window').height / 4,
        width: "70%",
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    form: {
        width: "100%",
        // borderColor: "#ccc",
        // borderWidth: 5,
    }

});
export default SignIn;