import React from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';

const ActivityComponent = () => {
    return (
        <ScrollView>
            <View>
                <ImageBackground
                    source={require('../../../assets/component/activity/karaoke.png')}
                    style={{
                        width: '100%',
                        height: Dimensions.get('window').width / 1.7,

                        alignItems: 'center', justifyContent: 'center'
                    }}
                    imageStyle={{ resizeMode: 'stretch' }}
                >

                </ImageBackground>
            </View>
            <View>
                <ImageBackground
                    source={require('../../../assets/component/activity/dongeng.png')}
                    style={{
                        width: '100%',
                        height: Dimensions.get('window').width / 1.7,

                        alignItems: 'center', justifyContent: 'center'
                    }}
                    imageStyle={{ resizeMode: 'stretch' }}
                >
                </ImageBackground>
            </View>
            <View style={{ paddingTop: 20 }}>
                <ImageBackground
                    source={require('../../../assets/component/activity/mewarnai.png')}
                    style={{
                        width: '100%',
                        paddingTop: 10,
                        height: Dimensions.get('window').width / 1.7,

                        alignItems: 'center', justifyContent: 'center'
                    }}
                    imageStyle={{ resizeMode: 'stretch' }}
                >
                </ImageBackground>
            </View>


        </ScrollView >
    )
}

const styles = StyleSheet.create({

})

export default ActivityComponent;