import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const FooterSwitch = () => {
    return (
        <View >
            <ImageBackground
                source={require('../../../../assets/component/profile/footer/footer.png')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                imageStyle={{ resizeMode: 'stretch' }}
            >
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({

})

export default FooterSwitch;