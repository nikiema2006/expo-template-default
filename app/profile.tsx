import { BlurView } from 'expo-blur';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
  export default function profile() {
    return (
      <View>
      <View style={{
        flex: 1,
        //alignContent: 'center',
        flexDirection: 'row',
       // alignItems: '',
        justifyContent: 'space-around',
        backgroundColor: 'pink',
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
          borderWidth : 0,
          shadowColor: 'black',
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
           backgroundColor: 'ghostwhite',
           width: 230,
           height: 200,
           borderRadius: 20,
           alignItems:'center',
           padding: 10,
           borderWidth : 0,
           shadowColor: 'red',
           shadowOpacity: 10,
           opacity: 1,
           shadowRadius: 5,
        }}>
          <Text> Trimestre N°2 </Text>

          <View>
          <View></View>
          <View></View>
          </View>
          <View>

            </View>
        </View>
  
      </View>
    </View>



    )
  }

  






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
