import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,ImageBackground } from 'react-native';
import OverviewText from "./OverviewText";

export default class WallImage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                    <ImageBackground
                        style={styles.wall} source={require('./../assets/1.jpg')}
                    >
                        <OverviewText/>
                    </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:290,
        width:Dimensions.get('window').width,
    },
    wall:{
      height:290,
      width:Dimensions.get('window').width,
    },
});
