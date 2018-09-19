import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class SplashScreen extends React.Component {
    render() {

      return (
        <View style={styles.container}>
          <Image style={styles.splashImage} source={require('./assets/images/itoken-ic.png')} resizeMode="contain" />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2196F3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    splashImage: {
        height: 200,
        width: 200
    }
  });
