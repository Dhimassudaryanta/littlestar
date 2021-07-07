import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { SocialIcon } from 'react-native-elements';

const FooterSocial = () => {
    return (
        <View style={{
            flexDirection: 'row',
            width: "70%",
            justifyContent: 'space-around',
            // borderColor: "#ccc",
            // borderWidth: 5,
        }}>
            <TouchableOpacity>
                <SocialIcon
                    type='facebook'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <SocialIcon
                    type='google'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <SocialIcon
                    type='twitter'
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({


});

export default FooterSocial;