import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import FooterPengaturan from '../../components/profile/footer/FooterPengaturan.component';
import PengaturanComponent from '../../components/profile/list/Pengaturan.component';

import { connect } from 'react-redux';
import { SignOut } from '../../actions/auth.actions';

const PengaturanScreen = ({ navigation, SignOut }) => {

    const onSubmitHandler = () => {
        Alert.alert(
            "Sign Out",
            "Apakah kamu yakin ingin sign out ?",
            [
                {
                    text: "Tidak",

                },
                {
                    text: "Iya",
                    onPress: () => SignOut(navigation.navigate('Profile'))


                },
            ],
        )
        console.log("wkwkwk");
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <PengaturanComponent navigation={navigation} onSubmit={onSubmitHandler}></PengaturanComponent>
            </View>
            <View style={styles.footer}>
                <FooterPengaturan></FooterPengaturan>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    body: {
        width: '100%',
        height: '60%',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    footer: {
        width: '100%',
        height: Dimensions.get('window').width / 1.5,
        // borderColor: '#ccc',
        // borderWidth: 5,
    }

});

export default connect(null, { SignOut })(PengaturanScreen);