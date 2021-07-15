import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const RiwayatComponent = ({ riwayat }) => {

    const [data, setData] = useState('');

    console.log('riwayat');

    useEffect(() => {
        setData(riwayat);
        if (!riwayat) {
            setData('');
        }
    }, [riwayat])

    if (!data) {
        return (
            <View style={styles.container}>
                <View>
                    <Text
                        style={styles.text}
                    >Kamu tidak punya riwayat aktivitas  ! :)</Text>
                </View>
            </View>

        )
    }
    else {
        return (
            <View>
                <Text>wkwkwk</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 5,
        // borderColor: '#ccc',
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: Dimensions.get('window').height / 45,
        textAlign: 'center'
    }
    // body: {
    //     width: '90%',
    //     borderColor: '#ccc',
    //     borderWidth: 5,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }

})

export default RiwayatComponent;