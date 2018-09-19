import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, WebView } from 'react-native';
import SplashScreen from './components/SplashScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import OfflineNotice from './components/OfflineNotice';

const slides = require('./components/assets/slider.js')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 0,
  },
   titlestyle: {

    fontSize:25,
    fontWeight:'bold',
    marginBottom: 0,
  },
  textstyle: {
    marginTop: 2,
 },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },

});

slides = [
    {
      key: 'somethun',
      imageStyle: styles.image,
      title: 'Exciting Offers and Deals',
      text: 'Shop with us to get exciting offers and\nexciting deals on your favourite products.',
      image: require('./components/assets/images/offers-tag.png'),
      titleStyle: styles.titlestyle,
      backgroundColor: '#59b2ab',
      textStyle: styles.textstyle,
    },
    {
      key: 'somethun-dos',
      title: 'Best Place',
      text: 'We grab the hottest deals in town and make\nthem better by helping you search and find\nthe right things at the right price at the right\ntime. There\'s value here for everyone. Sign\n Up for FREE today!',
      image: require('./components/assets/images/place-tag.png'),
      imageStyle: styles.image,
      titleStyle: styles.titlestyle,
      backgroundColor: '#febe29',
      textStyle: styles.textstyle,
    },
    {
      key: 'somethun1',
      title: 'Online and Offline!',
      text: 'Special offers and promotional deals for both\nonline and in-store across india.',
      image: require('./components/assets/images/online_offline-tag.png'),
      imageStyle: styles.image,
      titleStyle: styles.titlestyle,
      backgroundColor: '#22bcb5',
      textStyle: styles.textstyle,
    },
    {
      key: 'somethun2',
      title: 'Tours and Travel!',
      text: 'Travel around the world at exciting price with\nour tour packages.',
      image: require('./components/assets/images/itoken-ic.png'),
      imageStyle: styles.image,
      image: require('./components/assets/images/plane-tag.png'),
      titleStyle: styles.titlestyle,
      backgroundColor: '#22bcb5',
      textStyle: styles.textstyle
    }

  ];


export default class App extends React.Component {
  state = {
    SplashReady: true,
    showRealApp: false
  }

  componentDidMount() {
    setTimeout (() => {this.setState({SplashReady: false})}, 3000);
  }


  _onDone = () => {
    this.setState({ showRealApp: true });
  }

  _firstTimeUser = async () => {
    let appId = '';
    try {
      appId = await AsyncStorage.getItem('itoken_AppKey') || 'none';
    } catch (error) {
      //console.log(error.message);
      appId = 'none';
    }

    if(appId === 'none') {
      await AsyncStorage.setItem('itoken_AppKey', "Y");
      return true;
    }
    return false;
  }

  componentWillMount() {
          this.setState({
            showRealApp: !this._firstTimeUser()
          });
  }

  _renderItems = props => {
    <LinearGradient
    style={[styles.mainContent, {
      paddingTop: props.topSpacer,
      paddingBottom: props.bottomSpacer,
      width: props.width,
      height: props.height,
    }]}
    colors={props.colors}
    start={{x: 0, y: .1}} end={{x: .1, y: 1}}
  >
    <Ionicons style={{ backgroundColor: 'transparent' }} name={props.icon} size={200} color="white" />
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </LinearGradient>
  }

  render() {

    if(this.state.SplashReady === true) {

      return (<SplashScreen />);
    }


    if(this.state.showRealApp === true) {
    return (
      <View >
      
      <WebView
      source={{uri: 'http://itokken.com'}}
      style={{marginTop: 20}}
    />
      </View>
    );
  } else {
    //renderItem={this._renderItems}
    return <AppIntroSlider slides={slides} onDone={this._onDone}  />;
  }

  }
}
