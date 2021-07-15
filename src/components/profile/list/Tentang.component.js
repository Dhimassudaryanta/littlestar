import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../colors';

const TentangComponent = () => {
    return (
        <View>
            <FlatList
                data={[
                    { key: 'FAQ' },
                    { key: 'Tentang Kami', link: 'Subscribe' },
                    { key: 'Kebijakan', link: 'GantiAkun' },
                    { key: 'Syarat dan Ketentuan', link: 'GantiAkun' },
                ]}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate(`${item.link}`)}>
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

export default TentangComponent;