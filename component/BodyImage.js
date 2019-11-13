import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.imageSource} style={styles.image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    image:{
        height:200,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
});
