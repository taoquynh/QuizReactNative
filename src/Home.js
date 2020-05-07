/**
 */

import * as React from 'react';

import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
;

function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle='light-content'/>
        <View style={styles.body}>
          <Image 
          style={styles.styleImage} 
          source={{uri: 'https://quizondemand.co.uk/wp-content/uploads/Lockdown-quiz-yellow-01-1-1200x800.jpg'}}>
          </Image>
          <View style = {{height: 30}}/>
          <Text style={styles.text}>
            Funny Quiz
          </Text>
          <View style = {{height: 10}}/>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('QuizScreen', {name: 'QuizScreen'})}>
            <Text style={{color: 'black', fontWeight: '600'}}>START</Text>
          </TouchableOpacity>
          <View style = {{height: 80}}/>
        </View>
    </>
  );
};

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 10,
    width: 100,
    borderRadius: 5,
  },
  styleImage: {
    width: screenWidth,
    height: (800*screenWidth)/1200,
    alignSelf: 'stretch'
  },
})


export default Home;
