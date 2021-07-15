import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FooterSwitch from '../../components/profile/footer/FooterSwitch.component';
import GantiAkunComponent from '../../components/profile/list/GantiAkun.component';
import FormLogin from '../../components/form/FormLogin.component';

const GantiAkunScreen = () => {

    const [condition, setCondition] = useState(1);

    onPressHandler = () => {
        console.log('wkwkwk');
        setCondition(2);
    }

    if (condition === 1) {
        return (
            <View style={styles.container}>


                <View style={styles.body}>
                    <GantiAkunComponent
                        onPressHandler={onPressHandler}
                    ></GantiAkunComponent>

                </View>

                {/* <View style={styles.body}>
                    <FormLogin initialValues='AddChild'></FormLogin>
                </View> */}


                <View style={styles.footer}>
                    <FooterSwitch></FooterSwitch>
                </View>

            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <FormLogin initialValues='AddChild'></FormLogin>
                </View>
                <View style={styles.footer}>
                    <FooterSwitch></FooterSwitch>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
        // alignItems: 'center',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    body: {
        width: '90%',
        paddingTop: 15,
        height: '60%',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    footer: {
        width: '100%',
        height: Dimensions.get('window').width / 1.5,
        paddingTop: 15,
        paddingBottom: 15,
        // borderColor: '#ccc',
        // borderWidth: 5,
    }

});

export default GantiAkunScreen;