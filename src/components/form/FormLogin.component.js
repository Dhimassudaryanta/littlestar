import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, ToastAndroid } from 'react-native';
import { TextInput, Snackbar } from 'react-native-paper';
import { Formik, useFormik } from 'formik';
import CountryPicker from 'react-native-country-picker-modal'
import Colors from '../../colors';
import { Checkbox } from 'react-native-paper';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import Modal from 'react-native-modal';

const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

let schema = yup.object().shape({
    showEmail: yup.boolean(),
    email: yup.string()
        .email('Please enter valid email')
        .when("showEmail", {
            is: true,
            then: yup.string().required("Must enter email address")
        }),
    showPhoneNumber: yup.boolean(),
    phoneNumber: yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        , 'Phone number is not valid')

    // password: yup.string()
    //     .min(8, ({ min }) => `Password must be at least ${min} characters`)
    //     .required('Password is required')
    //     .matches(
    //         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //     )
}
);

let forgotSchema = yup.object().shape({

    showPhoneNumber: yup.boolean(),
    phoneNumber: yup.string()
        .email('Please enter valid email')
        .required("Must enter email address")


}
);


const FormLogin = ({ initialValues, callback, testLogin }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [country, setCountry] = useState('ID');
    const [countryCode, setCountryCode] = useState('62')
    const [codeVisibility, setCodeVisibility] = useState(false);
    const [checked, setChecked] = useState(false);
    const [dialog, setDialog] = useState(false);


    //formAddChild
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [newDate, setNewDate] = useState(date.toLocaleDateString());

    //UbahSandi
    const [passwordVisibility2, setPasswordVisibility2] = useState(true);
    const [passwordVisibility3, setPasswordVisibility3] = useState(true);
    const [passwordVisibility4, setPasswordVisibility4] = useState(true);
    //** */

    //Toast
    const showToast = (value) => {
        console.log("haha");
        ToastAndroid.show(value, ToastAndroid.SHORT);
    };
    //


    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(currentDate);
    // };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // const showTimepicker = () => {
    //     showMode('time');
    // };
    // console.log(date.toLocaleDateString());
    //
    //** */

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

    //UbahSandi

    const onEyeHandler2 = () => {
        setPasswordVisibility2(!passwordVisibility2);

    };
    const onEyeHandler3 = () => {
        setPasswordVisibility3(!passwordVisibility3);

    };
    const onEyeHandler4 = () => {
        setPasswordVisibility4(!passwordVisibility4);

    };

    let iconDisplay2 = 'eye';
    let iconDisplay3 = 'eye';
    let iconDisplay4 = 'eye';

    if (passwordVisibility2 === false) {
        iconDisplay = 'eye-off'
    }
    if (passwordVisibility3 === false) {
        iconDisplay = 'eye-off'
    }
    if (passwordVisibility4 === false) {
        iconDisplay = 'eye-off'
    }


    //** */

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
                        console.log(values.email);
                    }}

                >
                    {(props) => (
                        <View>
                            <TextInput
                                mode="outlined"
                                label="Alamat Email"
                                onBlur={props.handleBlur('email')}
                                onChangeText={text => {
                                    props.setFieldValue('email', text)
                                    props.setFieldValue('phoneNumber', '')
                                }}

                                value={props.values.email}
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
                                    onChangeText={text => {
                                        props.setFieldValue('phoneNumber', text)
                                        props.setFieldValue('email', '')
                                    }}
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
                            <TouchableOpacity onPress={props.handleSubmit}>
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
                                onChangeText={() =>
                                    props.handleChange('email')
                                }
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

    else if (initialValues === "ForgotPassword") {


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
                    initialValues={{ email: '', phoneNumber: '' }}
                    onSubmit={(values) => {

                        if (values.email === '' && values.phoneNumber === '') {
                            showToast("Formnya diisi dulu ya");
                        }
                        console.log(values)
                        // console.log(errors.email)

                        // if (values.phoneNumber) {
                        //     console.log(countryCode.toString().concat(values.phoneNumber))
                        // }
                        // else {
                        //     console.log(values.email)
                        // }
                    }}
                    validationSchema={forgotSchema}
                // validateOnChange={true}
                // validateOnMount={true}
                >
                    {
                        (props) => (
                            < View >
                                {props.errors.phoneNumber ?
                                    console.log(props.errors.phoneNumber)
                                    : null}
                                {props.isValidating === true && !props.values.phoneNumber ?
                                    showToast("Format emailnya masih salah nih")
                                    : null}
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 20, fontFamily: "Poppins-Light" }}>Retrieve Password</Text>
                                </View>
                                <View>
                                    <TextInput
                                        mode="outlined"
                                        label="Alamat Email"
                                        onChangeText={props.handleChange('email')
                                            //     text => {
                                            //     props.setFieldValue('email', text)
                                            //     props.setFieldValue('phoneNumber', '')
                                            // }
                                        }
                                        value={props.values.email}
                                        style={{

                                            backgroundColor: 'white'
                                        }}
                                        theme={{
                                            colors: {
                                                primary: 'black'
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

                                        onChangeText={
                                            props.handleChange('phoneNumber')
                                            //     text => {
                                            //     props.setFieldValue('phoneNumber', text)
                                            //     props.setFieldValue('email', '');
                                            // }

                                        }
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
                                <TouchableOpacity onPress={props.handleSubmit}>
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
                                </TouchableOpacity>
                            </View>
                        )}
                </Formik>

            </View >
        );
    }
    else if (initialValues === "AddChild") {
        return (
            <View>

                <Formik
                    initialValues={{ nama: '', dateOfBirth: '' }}
                    onSubmit={(values) => {

                        console.log(values);
                    }}
                >
                    {(props) => (
                        <View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        // console.log(event + selectedDate)
                                        const currentDate = selectedDate || date;
                                        setShow(Platform.OS === 'ios');
                                        setDate(currentDate);
                                        props.setFieldValue('dateOfBirth', currentDate.toLocaleDateString())
                                    }}
                                    maximumDate={new Date(1598051730000)}
                                />
                            )}
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontSize: 20, fontFamily: "Poppins-Light" }}>Nama Anak</Text>
                            </View>
                            <View>
                                <TextInput
                                    mode="outlined"
                                    label="Nama"
                                    onChangeText={text => {
                                        props.setFieldValue('nama', text)
                                    }}
                                    value={props.values.nama}
                                    style={{
                                        fontFamily: 'Poppins-Light',
                                        backgroundColor: 'white'
                                    }}
                                    theme={{
                                        colors: {
                                            primary: 'black'
                                        },
                                        fonts: {
                                            regular: {
                                                fontFamily: 'Poppins-Light'
                                            }
                                        }
                                    }}
                                ></TextInput>
                            </View>
                            <TouchableOpacity onPress={() => showDatepicker()}>
                                <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                                    <TextInput
                                        editable={false}
                                        mode="outlined"
                                        label="Tanggal Lahir"
                                        keyboardType="numeric"
                                        onChangeText={text => {
                                            props.setFieldValue('dateOfBirth', text)
                                        }}
                                        value={props.values.dateOfBirth}
                                        style={{ backgroundColor: 'white', width: "100%" }}
                                        theme={{
                                            colors: {
                                                primary: 'black',
                                            },
                                            fonts: {
                                                regular: {
                                                    fontFamily: 'Poppins-Light'
                                                }
                                            }
                                        }}
                                        right={<TextInput.Icon name="calendar" color={Colors.secondColor} onPress={() => showDatepicker()} />}
                                    ></TextInput>
                                </View>
                            </TouchableOpacity>
                            {(props.errors.phoneNumber && props.touched.phoneNumber && props.values.phoneNumber && !props.values.email) ?
                                <Text style={{ color: 'red' }}>{props.errors.phoneNumber}</Text> : null}

                            {/* Button */}
                            <TouchableOpacity onPress={props.handleSubmit}>
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
                                        }}>Simpan</Text>

                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>

            </View >
        );
    }
    else {
        return (
            <View>
                <Formik
                    initialValues={{ password: '', retypePassword: '', newPassword: '' }}
                    onSubmit={(values) => {

                        console.log(values);
                    }}
                >
                    {(props) => (
                        <View>
                            <View>
                                <TextInput
                                    mode="outlined"
                                    label="Password Lama"
                                    onChangeText={text => {
                                        props.setFieldValue('password', text)
                                    }}

                                    value={props.values.password}
                                    style={{
                                        backgroundColor: 'white',
                                    }}
                                    theme={{
                                        colors: {
                                            primary: 'black'
                                        },
                                        fonts: {
                                            regular: {
                                                fontFamily: 'Poppins-Light'
                                            }
                                        }
                                    }}
                                    secureTextEntry={passwordVisibility2}
                                    right={<TextInput.Icon name={iconDisplay2} color={Colors.secondColor}
                                        onPress={onEyeHandler2} />}
                                ></TextInput>
                            </View>
                            <TouchableOpacity onPress={() => showDatepicker()}>
                                <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                                    <TextInput
                                        mode="outlined"
                                        label="Password Baru"
                                        onChangeText={text => {
                                            props.setFieldValue('newPassword', text)
                                        }}
                                        value={props.values.newPassword}
                                        style={{ backgroundColor: 'white', width: "100%" }}
                                        theme={{
                                            colors: {
                                                primary: 'black',
                                            },
                                            fonts: {
                                                regular: {
                                                    fontFamily: 'Poppins-Light'
                                                }
                                            }
                                        }}
                                        secureTextEntry={passwordVisibility3}
                                        right={<TextInput.Icon name={iconDisplay3} color={Colors.secondColor}
                                            onPress={onEyeHandler3} />}
                                    ></TextInput>
                                </View>
                            </TouchableOpacity>
                            {(props.errors.phoneNumber && props.touched.phoneNumber && props.values.phoneNumber && !props.values.email) ?
                                <Text style={{ color: 'red' }}>{props.errors.phoneNumber}</Text> : null}
                            <TouchableOpacity onPress={() => showDatepicker()}>
                                <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                                    <TextInput
                                        mode="outlined"
                                        label="Konfirmasi Password Baru"
                                        onChangeText={text => {
                                            props.setFieldValue('retypePassword', text)
                                        }}
                                        value={props.values.retypePassword}
                                        style={{ backgroundColor: 'white', width: "100%" }}
                                        theme={{
                                            colors: {
                                                primary: 'black',
                                            },
                                            fonts: {
                                                regular: {
                                                    fontFamily: 'Poppins-Light'
                                                }
                                            }
                                        }}
                                        secureTextEntry={passwordVisibility4}
                                        right={<TextInput.Icon name={iconDisplay4} color={Colors.secondColor}
                                            onPress={onEyeHandler4} />}
                                    ></TextInput>
                                </View>
                            </TouchableOpacity>
                            {/* Button */}
                            <TouchableOpacity onPress={props.handleSubmit}>
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
                                        }}>Simpan</Text>

                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>

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