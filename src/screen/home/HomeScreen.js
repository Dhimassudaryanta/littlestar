import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import Colors from '../../colors';


const fakeData = {
    id: 1,
    id2: 2,
    id3: 3
}

const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

const HomeScreen = (props) => {

    const [video, setVideo] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [onLoad, setOnLoad] = useState(true);

    useEffect(() => {


        async function get() {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
            wait(1000).then(() => setVideo(response.data.meals))
        }

        get();




    }, [refreshing]);

    let [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/font/Poppins-Light.ttf'),
        'TallyText-Bold': require('../../../assets/font/TallyText-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;

    }

    //     <View opacity={0, 7} style={styles.loading}>
    //     {/* <AppLoading /> */}
    //     {!video ?
    //         <ActivityIndicator size="large" color={Colors.secondColor}></ActivityIndicator>

    //         : null}
    // </View>



    // console.log(Dimensions.get('window').width);
    const onRefresh = () => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    };

    const onLoadHandler = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color={Colors.secondColor} animating={onLoad}> </ActivityIndicator>
            </View>
        )

    }

    return (
        <SafeAreaView style={{
            // borderColor: "#ccc",
            //  borderWidth: 1, 
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{ flex: 1 }}>
                {!video ? onLoadHandler()
                    : null}
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

                    <View style={{ alignItems: 'center' }} >
                        <View style={styles.containerBody}>
                            {/* <Text>This is HomeScreen</Text> */}
                            <View style={styles.top}>
                                <Text style={styles.title}>Video Terakhir</Text>

                                <TouchableOpacity onPress={() => { }}>
                                    <Text style={{ fontWeight: 'bold' }} >Lihat Semua </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{}}>
                                <FlatList

                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={video}
                                    keyExtractor={result => result.idMeal}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={{ width: Dimensions.get('window').width / 1.5, height: "100%", paddingRight: 10 }}>
                                                <TouchableOpacity onPress={() => { }}>
                                                    <Card style={{
                                                        backgroundColor: 'white',

                                                    }}
                                                        mode="outlined"
                                                    >
                                                        <Card.Cover
                                                            source={{ uri: item.strMealThumb }}
                                                            style={{
                                                                margin: 5,
                                                                height: Dimensions.get('window').height / 7
                                                            }}
                                                        />

                                                        <Text
                                                            style={{ marginHorizontal: 5, fontFamily: 'Poppins-Light' }}
                                                            numberOfLines={1}
                                                        >
                                                            {item.strMeal}
                                                        </Text>
                                                    </Card>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }}>
                                </FlatList>
                            </View>
                        </View>

                    </View>

                </ScrollView>
            </View>



        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        backgroundColor: "white",
        // borderWidth: 5,
        // borderColor: "#ccc"
    },
    containerBody: {
        width: "95%",
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        // borderWidth: 5,
        // borderColor: "#ccc"
    },
    top: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        // borderWidth: 1,
        // borderColor: "#ccc"

    },
    title: {
        // fontSize: 18,
        fontWeight: 'bold',
        // fontFamily: 'Poppins-Light'
    },
    flat: {
        // borderWidth: 1,
        // borderColor: "#ccc"
    },
    loading: {
        // flex: 1,
        // borderWidth: 5,
        // borderColor: '#ccc',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.6,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;