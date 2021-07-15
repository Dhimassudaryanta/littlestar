import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, RefreshControl } from 'react-native';
import FooterSwitch from '../../components/profile/footer/FooterSwitch.component';
import GantiAkunComponent from '../../components/profile/list/GantiAkun.component';
import FormChild from '../../components/form/FormChild.component';
import { connect } from 'react-redux';
import { ChildAdd } from '../../actions/child.actions';

const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

const GantiAkunScreen = ({ ChildAdd, getUser }) => {

    const [condition, setCondition] = useState(1);
    const [user, setUser] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setUser(getUser);
    }, [getUser])

    const onRefresh = () => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    };

    onPressHandler = () => {
        console.log('wkwkwk');
        setCondition(2);
    }

    const onSubmitHandler = (name, date) => {
        ChildAdd(name, date)
        setCondition(1);
    }


    if (condition === 1) {
        return (
            <View style={styles.container}>


                <View style={styles.body}>
                    <GantiAkunComponent
                        onPressHandler={onPressHandler}
                        passUser={user ? user : null}
                    ></GantiAkunComponent>

                </View>

                {/* <View style={styles.body}>
                    <FormLogin initialValues='AddChild'></FormLogin>
                </View> */}


                <View style={styles.footer}>
                    <FooterSwitch></FooterSwitch>
                </View>

            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <FormChild onSubmit={onSubmitHandler} ></FormChild>
                </View>
                <View style={styles.footer}>
                    <FooterSwitch></FooterSwitch>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
        // alignItems: 'center',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    body: {
        width: '90%',
        paddingTop: 15,
        height: '60%',
        // borderColor: '#ccc',
        // borderWidth: 5,
    },
    footer: {
        width: '100%',
        height: Dimensions.get('window').width / 1.5,
        paddingTop: 15,
        paddingBottom: 15,
        // borderColor: '#ccc',
        // borderWidth: 5,
    }

});

const mapStateToProps = (state) => {
    return { getUser: state.auth }
}

export default connect(mapStateToProps, { ChildAdd })(GantiAkunScreen);