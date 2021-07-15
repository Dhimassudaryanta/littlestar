import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';


import CountryPicker from 'react-native-country-picker-modal'
import Colors from '../../colors';

const FormSignUp = ({ onSubmit }) => {

    //field
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Indonesia');
    const [countryCode, setCountryCode] = useState('62')
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [statusUser, setStatusUser] = useState('');

    //
    const [country2, setCountry2] = useState('ID');
    const [passwordVisibility, setPasswordVisibility] = useState(true);


    const [codeVisibility, setCodeVisibility] = useState(false);
    const [checked, setChecked] = useState(false);

    // console.log(country);
    // console.log(countryCode);

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
                mode="outlined"
                label="Nama"
                value={nama}
                onChangeText={(text) => setNama(text)}
                style={{
                    backgroundColor: 'white',
                }}
                theme={{
                    colors: {
                        primary: 'black',
                    },
                    fonts: {
                        regular: {
                            fontFamily: "Poppins-Light"
                        }
                    }
                }}
            ></TextInput>
            <TextInput
                mode="outlined"
                label="Alamat Email"
                value={email}
                onChangeText={(text) => setEmail(text)}

                style={{
                    backgroundColor: 'white',
                }}
                theme={{
                    colors: {
                        primary: 'black',
                    },
                    fonts: {
                        regular: {
                            fontFamily: "Poppins-Light"
                        }
                    }
                }}
            ></TextInput>
            <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={onCodeHandler} style={{ width: "23%" }}>
                    <TextInput
                        editable={false}
                        mode="outlined"
                        value={'+' + countryCode}
                        style={{ backgroundColor: 'white' }}
                        theme={{

                            fonts: {
                                regular: {
                                    fontFamily: "Poppins-Light"
                                }
                            }
                        }}
                    >
                    </TextInput>
                </TouchableOpacity>
                <TextInput
                    mode="outlined"
                    label="Nomor Handphone"
                    value={mobile}
                    onChangeText={(text) => setMobile(text)}
                    keyboardType="numeric"
                    style={{ backgroundColor: 'white', width: "75%" }}
                    theme={{
                        colors: {
                            primary: 'black',
                        },
                        fonts: {
                            regular: {
                                fontFamily: "Poppins-Light"
                            }
                        }
                    }}
                ></TextInput>
            </View>
            <TextInput
                mode="outlined"
                label="Password"
                placeholder="Type password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={passwordVisibility}
                right={<TextInput.Icon name={iconDisplay} color={Colors.secondColor}
                    onPress={onEyeHandler} />}
                style={{ backgroundColor: 'white' }}
                theme={{
                    colors: {
                        primary: 'black',
                    },
                    fonts: {
                        regular: {
                            fontFamily: "Poppins-Light"
                        }
                    }
                }}
            ></TextInput>
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
                <Text numberOfLines={2} style={{ fontFamily: 'Poppins-Light' }}>
                    Saya setuju dengan Syarat & Ketentuan & Kebijakan Bintang Kecil
                    {/* I agree with Terms and Conditions and Privacy Policy */}
                </Text>
            </View>

            {/* Button */}
            <TouchableOpacity onPress={() => onSubmit(nama, email, country, countryCode, mobile, password, checked)}>
                <View style={{ marginTop: 10, alignItems: 'center' }}>

                    <ImageBackground
                        source={require('../../../assets/component/rectangle.png')}
                        style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}
                    >
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Daftar</Text>

                    </ImageBackground>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default FormSignUp;