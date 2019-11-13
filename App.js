import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from "./component/Header";
import WallImage from "./component/WallImage";
import Body from "./component/Body";

export default class App extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <Header/>
          <WallImage/>
          <Body/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
