import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import FooterSocial from '../../components/footer/FooterSocial.component';
import FormLogin from '../../components/form/FormLogin.component';
import Colors from '../../colors';
import Logo from '../../components/header/Logo.component';

const Forgot = ({ navigation }) => {


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
                    <FormLogin initialValues="ForgotPassword"></FormLogin>
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
export default Forgot;