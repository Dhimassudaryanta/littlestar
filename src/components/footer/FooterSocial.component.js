import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { SocialIcon } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import axios from 'axios';

const FooterSocial = () => {

    const onGoogleHandler = async () => {

        const config = {
            androidClientId: `170670844550-989okh36bl08tekm9a3476m6k0a1caqo.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        };

        Google
            .logInAsync(config)
            .then((result => {
                const { type, user } = result;

                if (type === 'success') {
                    const { email, name } = user;
                    console.log(result);
                    console.log("Google Sign In Success")
                    console.log(email, name);
                }
                else {
                    console.log("Failed to login")
                }
            }))
            .catch(error => {
                console.log(error);
                console.log('An Error Occured. Check your network and try again')
            })




    };

    const onFacebookHandler = async () => {
        try {
            await Facebook.initializeAsync({
                // appId: '517644596030916',
                // appName: "jobfinder",
                appId: '878432932752676',
                appName: "logintest",
            });
            const out = await Facebook.logOutAsync();
            const result = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });
            if (result.type === 'success') {
                const response = await axios.get(`https://graph.facebook.com/${result.userId}?fields=id,name,picture,hometown,birthday,email&access_token=${result.token}`);

                const newresponse = { ...response.data, token: result.token }

                console.log(result);
                console.log(response.data);

                // dispatch({ type: "FACEBOOK_LOGIN_SUCCESS", payload: newresponse })

                Alert.alert(
                    'Status',
                    'You success to login',
                    [{ text: 'Okay', style: 'destructive' }]);

            } else {
                Alert.alert('Log in', 'You need to Log in with facebook !');
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

    return (
        <View style={{
            flexDirection: 'row',
            width: "70%",
            justifyContent: 'space-around',
            // borderColor: "#ccc",
            // borderWidth: 5,
        }}>
            <TouchableOpacity onPress={onFacebookHandler}>
                <SocialIcon
                    type='facebook'
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onGoogleHandler}>
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