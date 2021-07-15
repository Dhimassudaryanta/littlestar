import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';

import CountryPicker from 'react-native-country-picker-modal'
import Colors from '../../colors';

const FormSignIn = ({ onSubmit }) => {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('Indonesia');
    const [countryCode, setCountryCode] = useState('62')
    const [password, setPassword] = useState('');


    const [country2, setCountry2] = useState('ID');

    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [codeVisibility, setCodeVisibility] = useState(false);




    const onCodeHandler = () => {
        setCodeVisibility(true);
    }

    let iconDisplay = "eye"

    if (passwordVisibility === false) {
        iconDisplay = 'eye-off'
    }
    const onEyeHandler = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const onForgetHandler = () => {
        console.log("forgot password")
    };
    return (
        <View>
            < CountryPicker
                countryCode={country2}
                withFlagButton={false}
                withCallingCodeButton={false}
                withCountryNameButton={false}
                withCallingCode
                withEmoji
                withAlphaFilter
                onClose={() => setCodeVisibility(false)}
                onSelect={newData => {
                    setCountry(newData.name);
                    setCountry2(newData.cca2);
                    setCountryCode(newData.callingCode.toString());

                }}
                visible={codeVisibility}
            />
            <TextInput
                value={email}
                onChangeText={(text) => {
                    setEmail(text), setMobile('')
                }}
                mode="outlined"
                label="Alamat Email"
                style={{
                    backgroundColor: 'white',
                }}
                theme={{
                    colors: {
                        primary: 'black',
                    }
                }}
            ></TextInput>
            <View style={{ alignItems: 'center', paddingTop: 10 }}>
                <Text style={{
                    fontFamily: 'Poppins-Light',
                }}>ATAU</Text>
            </View>
            <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={onCodeHandler} style={{ width: "23%" }}>
                    <TextInput
                        editable={false}
                        mode="outlined"
                        value={'+' + countryCode}
                        style={{ backgroundColor: 'white' }}
                    >
                    </TextInput>
                </TouchableOpacity>
                <TextInput
                    value={mobile}
                    onChangeText={(text) => {
                        setEmail(''), setMobile(text)
                    }}
                    mode="outlined"
                    label="Nomor Handphone"
                    keyboardType="numeric"
                    style={{ backgroundColor: 'white', width: "75%" }}
                    theme={{
                        colors: {
                            primary: 'black',
                        }
                    }}
                ></TextInput>
            </View>
            <View style={{}}>
                <Text style={{
                    color: 'grey',
                    fontWeight: "normal",
                    fontFamily: 'Poppins-Light',
                    fontSize: 12,

                }}
                >Mohon untuk tidak mengisi kode negara pada kolom nomor handphone.</Text>
            </View>
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                mode="outlined"
                label="Password"
                placeholder="Type password"
                secureTextEntry={passwordVisibility}
                right={<TextInput.Icon name={iconDisplay} color={Colors.secondColor}
                    onPress={onEyeHandler} />}
                style={{ backgroundColor: 'white' }}
                theme={{
                    colors: {
                        primary: 'black',
                    }
                }}
            ></TextInput>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}>
                <TouchableOpacity onPress={onForgetHandler}>
                    < Text style={{ color: Colors.secondColor, fontFamily: 'Poppins-Light', }}> Lupa password?</Text>
                </TouchableOpacity>
            </View>

            {/* Button */}
            <TouchableOpacity onPress={() => onSubmit(email, mobile, country, countryCode, password)}>
                <View style={{ marginTop: 10, alignItems: 'center' }}>


                    <ImageBackground
                        source={require('../../../assets/component/rectangle.png')}
                        style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}
                    >
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", fontFamily: 'Poppins-Light', }}>Log In</Text>

                    </ImageBackground>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default FormSignIn;