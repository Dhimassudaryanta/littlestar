import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../colors';

const PengaturanComponent = ({ navigation, onSubmit }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{}}>
            <FlatList
                data={[
                    { key: 'Notifikasi' },
                    { key: 'Ubah Password', link: 'UbahSandi' },
                    { key: 'Sign Out', callback: onSubmit },
                ]}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity onPress={item.callback ? onSubmit : () => navigation.navigate(`${item.link}`)}>
                            <View style={{
                                padding: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text
                                    style={{
                                        fontSize: Dimensions.get('window').height / 40,
                                        fontFamily: 'Poppins-Light'
                                    }}

                                >{item.key}</Text>
                                {item.link || item.callback ?
                                    <Entypo name="chevron-right"
                                        size={Dimensions.get('window').height / 30}
                                        color="black" />
                                    :
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#767577" }}
                                        thumbColor={isEnabled ? Colors.secondColor : 'white'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                }
                            </View>
                            <View style={styles.border}>
                            </View>
                        </TouchableOpacity>
                    </View>

                }
            ></FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%'
    }
})

export default PengaturanComponent;