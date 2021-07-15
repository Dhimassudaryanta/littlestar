import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Colors from '../../../colors';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const INITIAL = {
    parent1: require("../../../../assets/component/profile/gantiakun/parent1.png"),
    parent2: require("../../../../assets/component/profile/gantiakun/parent2.png"),
    child1: require("../../../../assets/component/profile/gantiakun/child1.png"),
    child2: require("../../../../assets/component/profile/gantiakun/child2.png"),
}

const GantiAkunComponent = ({ onPressHandler, passUser }) => {
    const [parent, setParent] = useState(INITIAL.parent1);
    const [child, setChild] = useState(INITIAL.child2);
    const [button, setButton] = useState(false);

    return (
        <>
            <Text style={styles.textTitle}>Akses Aplikasi Sebagai :</Text>
            <View style={{
                // borderColor: '#ccc',
                // borderWidth: 5,
                paddingTop: 15,
            }}>
                <View style={{ width: 135, height: 45 }}>
                    <TouchableOpacity onPress={() => {
                        setChild(INITIAL.child2);
                        setParent(INITIAL.parent1);
                        setButton(false);
                    }}>
                        <ImageBackground
                            source={parent}
                            style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                            imageStyle={{ resizeMode: 'stretch' }}
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 15 }}>
                </View>
                <View style={{ width: 135, height: 45 }}>
                    <TouchableOpacity onPress={() => {
                        setChild(INITIAL.child1);
                        setParent(INITIAL.parent2);
                        setButton(true);
                    }}>
                        <ImageBackground
                            source={child}
                            style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                            imageStyle={{ resizeMode: 'stretch' }}
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {button ?
                    <><View
                        style={{
                            // borderColor: '#ccc',
                            // borderWidth: 5,
                            maxWidth: 120,
                            alignItems: 'center',
                            paddingTop: 15,
                        }}>

                    </View>
                        <View>
                            <FlatList
                                horizontal
                                key={passUser.children.id}
                                data={passUser.children}
                                renderItem={({ item }) =>
                                    <View>
                                        <TouchableOpacity onPress={() => { }}>
                                            <View style={{
                                                margin: 10,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                maxWidth: '100%'
                                            }}>
                                                <Button
                                                    mode='contained'
                                                    color={Colors.secondColor}
                                                    icon="human-greeting"
                                                    theme={{
                                                        colors: {
                                                            text: '#ccc'
                                                        },

                                                    }
                                                    }

                                                ><Text style={{
                                                    color: 'white',
                                                    fontFamily: 'TallyText-Bold'
                                                }}>{item.name}</Text></Button>
                                            </View>
                                            <View style={styles.border}>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                }
                            ></FlatList>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => onPressHandler()}>
                                    <AntDesign name="pluscircle" size={Dimensions.get('window').height / 20} color={Colors.secondColor} />
                                </TouchableOpacity>
                            </View>
                        </View></>
                    : null}
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
        backgroundColor: 'white',
        width: '95%',
        // borderWidth: 5,
        // borderColor: '#ccc',
    },
    textTitle: {
        fontFamily: 'TallyText-Bold',
        fontSize: Dimensions.get('window').height / 30,
        fontWeight: "100",
        // fontStyle: 'italic'

    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('window').height / 45,

    },
    image: {
        width: 200,
        height: 200
    }
})

export default GantiAkunComponent;