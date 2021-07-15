import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../colors';



const FormChild = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [date2, setDate2] = useState('');



    const [date, setDate] = useState(new Date(1598051730000));
    const [newDate, setNewDate] = useState('');

    //formAddChild
    // const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
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
                        setDate2(currentDate);
                        setNewDate(currentDate.toLocaleDateString())
                    }}
                    maximumDate={new Date(1598051730000)}
                />
            )}
            <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                mode="outlined"
                label="Nama"
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
            <TouchableOpacity onPress={() => showDatepicker()}>
                <View style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                    <TextInput
                        value={newDate}
                        editable={false}
                        mode="outlined"
                        label="Tanggal Lahir"
                        keyboardType="numeric"
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

            <TouchableOpacity onPress={() => onSubmit(name, date2)}>
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

    )
}

const styles = StyleSheet.create({


})

export default FormChild;