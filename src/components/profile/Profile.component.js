import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-elements';
import Colors from '../../colors';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProfileComponent = ({ passUser }) => {

    const [user, setUser] = useState('');
    const [head, setHead] = useState('');

    const [date, setDate] = useState('');



    useEffect(() => {

        if (!passUser) {
            setUser('')
            setDate('')
        }
        else {
            setUser(passUser);
            setDate(passUser.profile.createdAt)
        }
    }, [passUser])

    console.log(user);

    return (
        <View style={{
            // borderColor: '#ccc',
            // borderWidth: 5
        }}>

            <ImageBackground
                source={require('../../../assets/component/profile/headerbackground.png')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                imageStyle={{ resizeMode: 'stretch' }}
            >
                <View style={{
                    //  borderWidth: 5, 
                    //  borderColor: '#ccc' 
                }}>

                    {user ?
                        <View style={{
                            // borderColor: '#ccc', 
                            // borderWidth: 5, 
                            alignItems: 'center'
                        }}>
                            <View>
                                <Avatar
                                    rounded
                                    size={Dimensions.get('window').height / 7}
                                    activeOpacity={0.7}
                                    icon={{ name: 'user', type: 'font-awesome', color: Colors.secondColor }}
                                    overlayContainerStyle={{ backgroundColor: 'white' }}

                                />
                            </View>
                            <View style={{ paddingTop: 10, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Light', color: 'white', fontSize: Dimensions.get('window').height / 40 }}>Halo {user.profile.name}</Text>
                                <Text style={{ fontFamily: 'Poppins-Light', color: 'white', fontSize: Dimensions.get('window').height / 50 }}>Bergabung Sejak {new Date(date).toLocaleDateString()} </Text>
                            </View>

                        </View>

                        :
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Avatar
                                    rounded
                                    size={Dimensions.get('window').height / 7}
                                    activeOpacity={0.7}
                                    icon={{ name: 'user', type: 'font-awesome', color: Colors.secondColor }}
                                    overlayContainerStyle={{ backgroundColor: 'white' }}
                                />
                            </View>
                            <View style={{ paddingTop: 10, alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: Dimensions.get('window').height / 35, fontFamily: 'Poppins-Light' }}>Guest</Text>
                            </View>
                        </View>
                    }
                </View>

            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({


})

export default ProfileComponent;