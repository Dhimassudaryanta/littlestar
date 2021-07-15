import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import FooterSocial from '../../components/footer/FooterSocial.component';
import FormSignIn from '../../components/form/FormSignIn.component';
import Colors from '../../colors';
import Logo from '../../components/header/Logo.component';

import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

import { connect } from 'react-redux';
import { SignInEmail, SignInMobile } from '../../actions/auth.actions';

const SignIn = ({ navigation, SignInEmail, SignInMobile }) => {

    const onSubmitHandler = (email, mobile, country, countryCode, password) => {

        // console.log(email, mobile, country, countryCode, password);
        // console.log(password)
        if (email) {
            SignInEmail(email, password, () => navigation.navigate('Home'));
        }
        else if (mobile) {
            SignInMobile(mobile, password, () => navigation.navigate('Home'));
        }
    }

    //fonts
    let [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/font/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    //

    const onDaftarHandler = () => {
        navigation.navigate('SignUp');
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
                    <FormSignIn
                        onSubmit={onSubmitHandler}
                    ></FormSignIn>
                </View>
                <View>
                    <FooterSocial></FooterSocial>
                </View>
                <View style={{ flexDirection: "row" }}>

                    <Text style={{
                        textAlignVertical: "center",
                        fontFamily: 'Poppins-Light',
                        fontSize: Dimensions.get('window').height / 45
                    }}>Belum punya akun ?</Text>
                    <TouchableOpacity onPress={onDaftarHandler}>
                        <Text style={{
                            color: Colors.secondColor,
                            fontFamily: 'Poppins-Light',
                            fontSize: Dimensions.get('window').height / 35
                        }}>  Daftar</Text>
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
export default connect(null, { SignInEmail, SignInMobile })(SignIn);