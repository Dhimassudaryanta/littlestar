import Api from '../apis/Api';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChildAdd = (name, date) => async dispatch => {


    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');

    if (token) {

        const user2 = JSON.parse(user);
        const user3 = user2.user;
        // console.log(user3);

        try {
            const response = await Api.post(`/api/v1/child/${user3.id}/post`, {
                "name": `${name}`,
                "dob": `${date}`,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // console.log(response.data)

            if (response.data.status === 'success') {

                const response2 = await Api.get(`/api/v1/users/${user3.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                });


                await AsyncStorage.setItem('user', JSON.stringify(response2.data.data));
                // console.log("hehehehe")
                // console.log(response2.data.data)

                dispatch({ type: "CHILD_ADD", payload: response2.data.data.user })

            }



            else if (response.data.status === 'Failed') {
                ToastAndroid.show(response.data.message, ToastAndroid.SHORT);

            }

            // if (response.data.status === 'success') {
            //     const getId = response.data.data.user.id
            //     const getToken = response.data.data.token

            //     ToastAndroid.show('Login Berhasil', ToastAndroid.LONG);

            //     // console.log(getId, getToken);
            //     response2 = await Api.get(`/api/v1/users/${getId}`, {
            //         headers: {
            //             Authorization: `Bearer ${getToken}`
            //         }
            //     })

            //     await AsyncStorage.setItem('token', getToken);
            //     await AsyncStorage.setItem('user', JSON.stringify(response2.data.data));

            //     dispatch({ type: "SIGN_IN", payload: response2.data.data.user })

            //     if (callback) {
            //         callback();
            //     }
            // }

        } catch (err) {
            console.log(err.response.data.message)
            ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
        }

        // dispatch({ type: 'SIGN_IN', payload: user3 });
    }
    else {
        null;
    }

}