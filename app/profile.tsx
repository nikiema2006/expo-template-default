import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
//import React from 'react';
import * as React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { BarChart } from 'react-native-gifted-charts';
import { useSharedValue } from "react-native-reanimated";
import {
  ICarouselInstance
} from "react-native-reanimated-carousel";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;



export default function profile() {

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

    return (
      <View>
      <LinearGradient 
       colors={['rgba(35, 32, 206, 0.56)', 'transparent']}
      
      style={{
        flex: 1,
        //alignContent: 'center',
        flexDirection: 'row',
       // alignItems: '',
        justifyContent: 'space-around',
       // backgroundColor: 'pink',
        width: 'auto',
        height: 200,
        //justifyContent: 'center'
        padding: 10,
        gap: 10,
  
      }}>
        <TouchableOpacity>
        <BlurView intensity={50} tint='light'  style={{
          width: 230,
          height: 200,
          borderRadius: 20,
          alignItems:'center',
          padding: 10,
          //borderWidth : 0,
          shadowColor: 'grey',
          shadowOpacity: 10,
          shadowRadius: 5,
        }}>
          <Text style={{
            fontFamily: 'time new roman',
            fontSize: 20,
            textDecorationLine: 'underline',
          }}> mots du jour</Text>
        </BlurView >
        </TouchableOpacity>
       
       
       
        <View style={{
         //  backgroundColor: 'rgba(26, 20, 20, 0.71)',
           width: 230,
           height: 200,
           borderRadius: 20,
           padding: 10,
           borderWidth : 0,
           shadowColor: 'grey',
           shadowOpacity: 10,
           opacity: 1,
           shadowRadius: 5,
           flexDirection:'row'
        }}>

          <LinearGradient colors={['rgba(82, 91, 173, 0.4)', 'transparent']} style={{ flexDirection: 'column', borderWidth : 0, shadowColor: 'grey',shadowOpacity: 10, width: 85, height: 180, borderRadius:10, alignItems: 'center', gap: 2, justifyContent: 'space-around', padding: 1}}>
            <BlurView intensity={50} tint='dark' style={{ backgroundColor: 'black', width: 80, height: 95 , borderRadius:10 }}>
              <Text style={{ fontSize:30, fontFamily: "time new roman", fontWeight:'bold'}}>  19.45</Text>
           </BlurView>
           <BlurView intensity={20} tint='dark' style={{ backgroundColor: 'red', width: 80, height: 75,borderRadius:10, backgroundImage:'C:\Users\Administrator\Downloads\gsao trae task ùanager\assets\images\react-logo.png', }}>

           </BlurView>
          
        

          </LinearGradient>
          
             <View style= {{ alignItems: 'center', paddingStart:10, backgroundImage:'C:\Users\Administrator\Downloads\gsao trae task ùanager\assets\images\react-logo.png'}}>
            <BlurView style={{width: 110, overflow: 'hidden' , height: 180, borderRadius:10, backgroundImage:'../assets/images/react-logo.png' }}>
              <ImageBackground  source={require('../assets/images/react-logo.png')}>

              </ImageBackground>
            </BlurView>
          </View>
          <View>

            </View>


        </View>
  
      </LinearGradient>
      
    </View>


    )
  }

  



  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});





  /*
  
  import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';

export default function App() {
  const text = 'Hello, my container is blurring contents underneath!';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        {[...Array(20).keys()].map(i => (
          <View
            key={`box-${i}`}
            style={[styles.box, i % 2 === 1 ? styles.boxOdd : styles.boxEven]}
          />
        ))}
      </View>
      <BlurView intensity={100} style={styles.blurContainer}>
        <Text style={styles.text}>{text}</Text>
      </BlurView>
      <BlurView intensity={80} tint="light" style={styles.blurContainer}>
        <Text style={styles.text}>{text}</Text>
      </BlurView>
      <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
        <Text style={[styles.text, { color: '#fff' }]}>{text}</Text>
      </BlurView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  background: {
    flex: 1,
    flexWrap: 'wrap',
    ...StyleSheet.absoluteFill,
  },
  box: {
    width: '25%',
    height: '20%',
  },
  boxEven: {
    backgroundColor: 'orangered',
  },
  boxOdd: {
    backgroundColor: 'gold',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

  */
