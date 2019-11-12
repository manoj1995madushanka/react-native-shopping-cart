import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.logo}
                    source={require('./../assets/logo.png')}
                />
                <Text style={styles.title}>Shopping Cart </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:80,
        marginTop:20,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderBottomWidth:4,
        borderColor:'#ccc',
        width: Dimensions.get('window').width,
    },
    logo:{
        height: 40,
        width: 40,
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        fontStyle: 'italic',
        marginLeft: 10,
        color:'#000',
    },
});
