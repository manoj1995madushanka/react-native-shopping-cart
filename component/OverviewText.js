import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View >
                <Text style={styles.headerText} >Watches</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        //for ios
        shadowColor:'#000',
        shadowOffset:{width: 0,height: 2},
        shadowOpacity:0.8,
        shadowRadius:3,
        borderRadius:10,
        //for android
        elevation:1,
        //general
        alignSelf:'center',
        fontSize:45,
        color:'#292929',
        textAlign:'center',
        backgroundColor:'rgba(225,225,225,0.7)',
    },
});
