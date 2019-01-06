import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <ImageBackground style={ styles.imgBackground }
        resizeMode='cover'
        source={require('./assets/bg.png')}>

      <View style={styles.container}>
        <Image style={ styles.character }
          source={require('./assets/boy.png')}>
        </Image>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  character: {
    width: 80,
    height: 100,
    position: 'absolute',
    bottom: 0,
  },
});
