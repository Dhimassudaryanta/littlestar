import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormLogin from '../../../components/form/FormLogin.component';
import Logo from '../../../components/header/Logo.component';

const UbahSandiScreen = () => {
    return (
        <SafeAreaView style={{
            // borderColor: "#ccc",
            // borderWidth: 5,
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <View style={styles.container}>
                <View style={{
                    paddingTop: 20,
                    height: Dimensions.get('window').height / 5,
                    // borderColor: "#ccc",
                    // borderWidth: 5
                }}>
                    <Logo initialValues='UbahSandi'></Logo>
                </View>
                <View style={{
                    width: '90%',
                    paddingTop: 15

                }}>
                    <FormLogin></FormLogin>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // borderColor: "#ccc",
        // borderWidth: 5
    },
    body: {

    }

});

export default UbahSandiScreen;