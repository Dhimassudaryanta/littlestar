import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardType, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import CountryPicker from 'react-native-country-picker-modal'
import Colors from '../../colors';
import { Checkbox } from 'react-native-paper';

import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';


const FormLogin = ({ initialValues, callback, testLogin }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [country, setCountry] = useState('ID');
    const [countryCode, setCountryCode] = useState('62')
    const [codeVisibility, setCodeVisibility] = useState(false);
    const [checked, setChecked] = useState(false);

    //fonts
    let [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/font/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    //
    const loginTestHandler = () => {
        testLogin();
    }

    const onCodeHandler = () => {

        setCodeVisibility(true);
    }

    const onEyeHandler = () => {
        setPasswordVisibility(!passwordVisibility);

    };

    let iconDisplay = 'eye';

    if (passwordVisibility === false) {
        iconDisplay = 'eye-off'
    }

    const onForgetHandler = () => {
        callback();
    };


    if (initialValues === "SignIn") {
        return (
            <View>
                < CountryPicker
                    countryCode={country}
                    withFlagButton={false}
                    withCallingCodeButton={false}
                    withCountryNameButton={false}
                    withCallingCode
                    withEmoji
                    withAlphaFilter
                    onClose={() => setCodeVisibility(false)}

                    onSelect={newData => {
                        setCountry(newData.cca2);
                        setCountryCode(newData.callingCode);

                    }}
                    visible={codeVisibility}
                />
                <Formik
                    initialValues={{ password: '', email: '', phoneNumber: '' }}
                    onSubmit={(values) => {

                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                mode="outlined"
                                label="Alamat Email"
                                onBlur={props.handleBlur('email')}
                                onChangeText={props.handleChange('email')}
                                value={props.values.username}
                                style={{
                                    backgroundColor: 'white',
                                }}
                                theme={{
                                    colors: {
                                        primary: 'black',
                                    }
                                }}
                            ></TextInput>
                            {(props.errors.email && props.touched.email) &&
                                <Text style={{ color: 'red' }}>{props.errors.email}</Text>}
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
                                    mode="outlined"
                                    label="Nomor Handphone"
                                    keyboardType="numeric"
                                    onBlur={props.handleBlur('phoneNumber')}
                                    onChangeText={props.handleChange('phoneNumber')}
                                    value={props.values.phoneNumber}
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
                                mode="outlined"
                                label="Password"
                                placeholder="Type password"
                                secureTextEntry={passwordVisibility}
                                onBlur={props.handleBlur('password')}
                                right={<TextInput.Icon name={iconDisplay} color={Colors.secondColor}
                                    onPress={onEyeHandler} />}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                style={{ backgroundColor: 'white' }}
                                theme={{
                                    colors: {
                                        primary: 'black',
                                    }
                                }}
                            ></TextInput>
                            {(props.errors.password && props.touched.password) &&
                                <Text style={{ color: 'red' }}>{props.errors.password}</Text>}

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
                            <TouchableOpacity onPress={loginTestHandler}>
                                <View style={{ marginTop: 10, alignItems: 'center' }}>

                                    {/* <Button
                                mode="contained"
                                onPress={props.handleSubmit}
                                style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}
                                color={Colors.secondColor}
                            >
                                <Text style={{ color: "white" }}>SignIn</Text>
                            </Button> */}
                                    {/* <LinearGradient
                                // Button Linear Gradient
                                start={{ x: 0.9, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[Colors.secondColor, 'white', Colors.secondColor]}
                                style={{ borderWidth: 5, borderColor: "#ccc", width: "100%", height: 50 }}>
                                <Text style={styles.text}>Sign in with Facebook</Text>
                            </LinearGradient> */}

                                    <ImageBackground
                                        source={require('../../../assets/component/rectangle.png')}
                                        style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}
                                    >
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", fontFamily: 'Poppins-Light', }}>Log In</Text>

                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ padding: Dimensions.get('window').height / 70 }}>
                        <Text style={{ fontFamily: 'Poppins-Light' }}>Lanjutkan dengan :</Text>
                    </View>

                </View>
            </View>
        );
    }

    else if (initialValues === "SignUp") {
        return (
            <View>
                < CountryPicker
                    countryCode={country}
                    withFlagButton={false}
                    withCallingCodeButton={false}
                    withCountryNameButton={false}
                    withCallingCode
                    withEmoji
                    withAlphaFilter
                    onClose={() => setCodeVisibility(false)}

                    onSelect={newData => {
                        setCountry(newData.cca2);
                        setCountryCode(newData.callingCode);

                    }}
                    visible={codeVisibility}
                />
                <Formik
                    initialValues={{ password: '', email: '', phoneNumber: '' }}
                    onSubmit={(values) => {

                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                mode="outlined"
                                label="Nama"
                                onBlur={props.handleBlur('email')}
                                onChangeText={props.handleChange('email')}
                                value={props.values.username}
                                style={{
                                    backgroundColor: 'white',
                                }}
                                theme={{
                                    colors: {
                                        primary: 'black',
                                    }
                                }}
                            ></TextInput>
                            <TextInput
                                mode="outlined"
                                label="Alamat Email"
                                onBlur={props.handleBlur('email')}
                                onChangeText={props.handleChange('email')}
                                value={props.values.username}
                                style={{
                                    backgroundColor: 'white',
                                }}
                                theme={{
                                    colors: {
                                        primary: 'black',
                                    }
                                }}
                            ></TextInput>
                            {(props.errors.email && props.touched.email) &&
                                <Text style={{ color: 'red' }}>{props.errors.email}</Text>}

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
                                    mode="outlined"
                                    label="Nomor Handphone"
                                    keyboardType="numeric"
                                    onBlur={props.handleBlur('phoneNumber')}
                                    onChangeText={props.handleChange('phoneNumber')}
                                    value={props.values.phoneNumber}
                                    style={{ backgroundColor: 'white', width: "75%" }}
                                    theme={{
                                        colors: {
                                            primary: 'black',
                                        }
                                    }}
                                ></TextInput>
                            </View>
                            <TextInput
                                mode="outlined"
                                label="Password"
                                placeholder="Type password"
                                secureTextEntry={passwordVisibility}
                                onBlur={props.handleBlur('password')}
                                right={<TextInput.Icon name={iconDisplay} color={Colors.secondColor}
                                    onPress={onEyeHandler} />}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                style={{ backgroundColor: 'white' }}
                                theme={{
                                    colors: {
                                        primary: 'black',
                                    }
                                }}
                            ></TextInput>
                            {(props.errors.password && props.touched.password) &&
                                <Text style={{ color: 'red' }}>{props.errors.password}</Text>}
                            <View style={{
                                marginTop: 10,
                                flexDirection: 'row',
                                maxWidth: "90%"
                            }}>
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                    color={Colors.secondColor}
                                />
                                <Text numberOfLines={2}>
                                    Saya setuju dengan Syarat & Ketentuan & Kebijakan Bintang Kecil
                                    {/* I agree with Terms and Conditions and Privacy Policy */}
                                </Text>
                            </View>

                            {/* Button */}
                            <View style={{ marginTop: 10, alignItems: 'center' }}>

                                <ImageBackground
                                    source={require('../../../assets/component/rectangle.png')}
                                    style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}
                                >
                                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Daftar</Text>

                                </ImageBackground>

                            </View>

                        </View>
                    )}
                </Formik>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ padding: Dimensions.get('window').height / 70 }}>
                        <Text>Lanjutkan dengan :</Text>
                    </View>

                </View>
            </View >
        );
    }
    else {
        return (
            <View>
                < CountryPicker
                    countryCode={country}
                    withFlagButton={false}
                    withCallingCodeButton={false}
                    withCountryNameButton={false}
                    withCallingCode
                    withEmoji
                    withAlphaFilter
                    onClose={() => setCodeVisibility(false)}

                    onSelect={newData => {
                        setCountry(newData.cca2);
                        setCountryCode(newData.callingCode);

                    }}
                    visible={codeVisibility}
                />
                <Formik
                    initialValues={{ password: '', email: '', phoneNumber: '' }}
                    onSubmit={(values) => {

                    }}
                >
                    {(props) => (
                        <View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontSize: 20, fontFamily: "Poppins-Light" }}>Retrieve Password</Text>
                            </View>
                            <View>
                                <TextInput
                                    mode="outlined"
                                    label="Alamat Email"
                                    keyboardType="numeric"
                                    onBlur={props.handleBlur('phoneNumber')}
                                    onChangeText={props.handleChange('phoneNumber')}
                                    value={props.values.phoneNumber}
                                    style={{ backgroundColor: 'white' }}
                                    theme={{
                                        colors: {
                                            primary: 'black',
                                        }
                                    }}
                                ></TextInput>
                            </View>
                            <View style={{ alignItems: "center", paddingTop: 10 }}>
                                <Text style={{ fontFamily: "Poppins-Light" }}>ATAU</Text>
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
                                    mode="outlined"
                                    label="Nomor Handphone"
                                    keyboardType="numeric"
                                    onBlur={props.handleBlur('phoneNumber')}
                                    onChangeText={props.handleChange('phoneNumber')}
                                    value={props.values.phoneNumber}
                                    style={{ backgroundColor: 'white', width: "75%" }}
                                    theme={{
                                        colors: {
                                            primary: 'black',
                                        }
                                    }}
                                ></TextInput>

                            </View>


                            {/* Button */}
                            <View style={{ marginTop: 10, alignItems: 'center' }}>

                                <ImageBackground
                                    source={require('../../../assets/component/rectangle.png')}
                                    style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}
                                >
                                    <Text style={{
                                        color: "white",
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        fontFamily: "Poppins-Light"
                                    }}>Lanjut</Text>

                                </ImageBackground>

                            </View>

                        </View>
                    )}
                </Formik>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    form: {
        // backgroundColor: 'white',
        // borderColor: "#ccc",
    }
});

export default FormLogin;