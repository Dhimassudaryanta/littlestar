import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../../../assets/logo.png")} >
            </Image>
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "center"
    },
});

export default Logo;