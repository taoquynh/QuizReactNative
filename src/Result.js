/* eslint-disable react-native/no-inline-styles */
/**
 * Result
 */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function Result({route, navigation}) {
  const {point} = route.params;
  const {total} = route.params;
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Image
          style={styles.styleImage}
          source={{
            uri:
              'https://media.istockphoto.com/photos/gold-trophy-picture-id621141390?k=6&m=621141390&s=612x612&w=0&h=fT7NqYnewt9qpRpiArwy9_iC0W1b0tBsu-RUwMxywk8=',
          }}
        />
        <Text style={styles.textStyle}>
          Bạn trả lời đúng {`${point}/${total}`} câu
        </Text>
        <View style={{height: 20}} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}>
          <Text style={{color: 'black', fontWeight: '600'}}>RESTART</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleImage: {
    width: screenWidth,
    height: (612 * screenWidth) / 612,
    alignSelf: 'stretch',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 10,
    width: 100,
    borderRadius: 5,
  },
});
export default Result;
