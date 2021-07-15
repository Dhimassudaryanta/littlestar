
import axios from 'axios';
import Api from '../apis/Api';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const showToast = (value) => {
    console.log("haha");
    ToastAndroid.show(value, ToastAndroid.SHORT);
};

export const SignUp = (name, email, country, countryCode, mobile, password, checked, callback) => async dispatch => {

    console.log(checked, name)

    if (checked === false) {
        return showToast("Mohon dicentang syarat dan ketentuan")
    }
    try {
        const response = await Api.post('/api/v1/registers/post', {
            "name": `${name}`,
            "email": `${email}`,
            "code_country": `${countryCode}`,
            "country": `${country}`,
            "mobile": `${mobile}`,
            "password": `${password}`,
            "status_user": "active",
        });
        // console.log(response.data.data);

        if (response.data.status === 'success') {
            const getId = response.data.data.user.id
            const getToken = response.data.data.token

            // console.log(getId, getToken);
            response2 = await Api.get(`/api/v1/users/${getId}`, {
                headers: {
                    Authorization: `Bearer ${getToken}`
                }
            })

            dispatch({ type: "SIGN_UP", payload: response2.data.data.user })

            if (callback) {
                callback()
            }

            // console.log(response2.data.data.user);
        }
        else {
            showToast(response.data.message)
        }

    } catch (err) {
        showToast(err.response.data.message);
        console.log(err.response.data.message);
    }
}

export const SignInEmail = (email, country, countryCode, password, callback) => async dispatch => {

    // console.log(email, country, countryCode, password)


    try {
        const response = await Api.post('/api/v1/login/email/post', {
            "email": `${email}`,
            "password": `${password}`,
        });
        // console.log(response.data.data);

        if (response.data.status === 'success') {
            const getId = response.data.data.user.id
            const getToken = response.data.data.token

            // console.log(getId, getToken);
            response2 = await Api.get(`/api/v1/users/${getId}`, {
                headers: {
                    Authorization: `Bearer ${getToken}`
                }
            })

            await AsyncStorage.setItem('token', getToken);
            await AsyncStorage.setItem('user', JSON.stringify(response2.data.data));

            dispatch({ type: "SIGN_IN", payload: response2.data.data.user })

            if (callback) {
                callback();
            }
        }

    } catch (err) {
        console.log(err.response.data.message)
        showToast(err.response.data.message);
    }



}

export const tryLocalSignIn = () => async dispatch => {


    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');

    if (token) {

        const user2 = JSON.parse(user);
        const user3 = user2.user;

        dispatch({ type: 'SIGN_IN', payload: user3 });
    }
    else {
        null;
    }

}



export const SignOut = (callback) => async dispatch => {

    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');

    dispatch({ type: 'SIGN_OUT', payload: null });

    if (callback) {
        callback()
    }


}

 // console.log(name, email, country, countryCode, mobile, password, statusUser);

// const response = await axios.post('https://ff8518ad98e3.ngrok.io/api/v1/login/email/post', {
//     "Email": "test@gmail.com",
//     "Password": "user1234"
// });
// console.log(response);


    // const response = await axios.post('https://6d94e89a6edf.ngrok.io/api/v1/login/email/post', {
    //     "Email": "test@gmail.com",
    //     "Password": "user1234"
    // })


     // async function test() {
        //     const response = await axios.get('https://6d94e89a6edf.ngrok.io/api/v1/users', {
        //         // headers: {
        //         //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2MTA2ODQzfQ.ODn6T2LknmpTCgHdTzd9GlaLvOx44zcChEBPcTN8Mxs'
        //         // }
        //     });
        //     console.log(response);
        // }
        // async function test() {
        //     const response = await axios.post('https://4376d173230e.ngrok.io/api/v1/login/email/post/', {
        //         "email": "test@gmail.com",
        //         "password": "User123"
        //     });
        //     console.log(response.data.data);
        // }
        // test();