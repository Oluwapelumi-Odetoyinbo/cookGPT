import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Marquee } from '@animatereactnative/marquee'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Colors from '@/services/Colors'

export default function Landing() {
  const imageList = [
    require('./../assets/images/images/1.jpg'),
    require('./../assets/images/images/c1.jpg'),
    require('./../assets/images/images/2.jpg'),
    require('./../assets/images/images/c2.jpg'),
    require('./../assets/images/images/3.jpg'),
    require('./../assets/images/images/c3.jpg'),
    require('./../assets/images/images/4.jpg'),
    require('./../assets/images/images/5.jpg'),
    require('./../assets/images/images/6.jpg'),
  ]
  return (
    <GestureHandlerRootView>
      <View>
        <Marquee spacing={10} speed={0.7}
          style={{
            transform: [{ rotate: '-4deg' }]
          }}

        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee spacing={10} speed={0.4}
          style={{
            transform: [{ rotate: '-4deg' }],
            marginTop: 10
          }}

        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee spacing={10} speed={0.5}
          style={{
            transform: [{ rotate: '-4deg' }],
            marginTop: 10
          }}

        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
      </View>

      <View style={{
        backgroundColor: Colors.WHITE,
        height: '100%',
        padding: 20,
      }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
          }}
        >CookGPT🥗🔍 | Find, Create & Enjoy Delicious Recipes!
        </Text>
        <Text style={{
          textAlign: 'center',
          fontFamily: 'outfit',
          fontSize: 17,
          color: Colors.GRAY,

        }}>Generate delicious recipes in seconds with the power of AI! 🍔
        </Text>
        <TouchableOpacity 
        onPress={() => console.log('Get Started')}
        style={styles.button}>
          <Text style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontSize: 17,
            fontFamily: 'outfit',
            marginTop: 7,
          }}>
            Get Started
          </Text>
        </TouchableOpacity >

      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  }
})