import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from '@expo-google-fonts/inter';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const ListComponent = ({ passUser, navigation }) => {

    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(passUser);
        if (!passUser) {
            setUser('');
        }
    }, [passUser])



    // let [fontsLoaded] = useFonts({
    //     'Poppins-Light': require('../../../assets/font/Poppins-Light.ttf'),
    //     'TallyText-Bold': require('../../../assets/font/TallyText-Bold.ttf')
    // });

    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }


    return (
        <View>
            {user ?
                <FlatList
                    data={[
                        { key: 'Riwayat Aktivitas', link: 'Riwayat' },
                        { key: 'Jenis Subscribe', link: 'Subscribe' },
                        { key: 'Ganti Akun', link: 'GantiAkun' },
                        { key: 'Pengaturan', link: 'Pengaturan' },
                        { key: 'Tentang Bintang Kecil', link: 'Tentang' },
                    ]}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate(`${item.link}`)}>
                                <View style={{
                                    margin: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text
                                        style={{
                                            fontSize: Dimensions.get('window').height / 40,
                                            fontFamily: 'Poppins-Light'
                                        }}

                                    >{item.key}</Text>
                                    <Entypo name="chevron-right"
                                        size={Dimensions.get('window').height / 30}
                                        color="black" />
                                </View>
                                <View style={styles.border}>
                                </View>
                            </TouchableOpacity>
                        </View>

                    }
                ></FlatList> :

                <FlatList
                    data={[
                        { key: 'Ayo Daftar', link: 'SignUp' },
                        { key: 'Silahkan Login', link: 'SignIn' },
                    ]}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate(`${item.link}`)}>
                                <View style={{
                                    margin: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text
                                        style={{
                                            fontSize: Dimensions.get('window').height / 40,
                                            fontFamily: 'Poppins-Light'
                                        }}

                                    >{item.key}</Text>
                                    <Entypo name="chevron-right"
                                        size={Dimensions.get('window').height / 30}
                                        color="black" />
                                </View>
                                <View style={styles.border}>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                ></FlatList>
            }

        </View >
    )

}

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%'
    }
})

export default ListComponent;