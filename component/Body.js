import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyImage from "./BodyImage";

export default class Body extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column1}>
                    <BodyImage imageSource={require('./../assets/4.jpg')}/>
                </View>
                <View style={styles.f5t}>
                    <BodyImage imageSource={require('./../assets/2.jpg')}/>
                </View>
                <View style={styles.f4g}>
                    <BodyImage imageSource={require('./../assets/3.jpg')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
        backgroundColor:'#3b5998',
    },
    column1:{
        flex: 1,
        padding: 5,
    },
    f5t:{
        flex:2,
        padding:5,
    },
    f4g:{
        width:'100%',
        padding:5,
    },
});
