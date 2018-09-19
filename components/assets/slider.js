import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
const styles = StyleSheet.create({

  image: {
    width: 320,
    height: 320,
  }
});

slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('./images/itoken-ic.png'),
      imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('./images/itoken-ic.png'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('./images/itoken-ic.png'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    }
  ];

  export default slides;
