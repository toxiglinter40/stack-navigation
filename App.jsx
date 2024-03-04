import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View  style={styles.container}>
      <view style={styles.container1}>
      <Image style={{width: 260, height: 260}}  source={require('./assets/futebol.png')}  />
      <button style={styles.button1}>futebol</button>
      <Image source={require('./assets/motogp.png')} style={styles.img2} />
      <button  style={styles.button2}>motogp</button>
      <Image style={{width: 260, height: 260}}  source={require('./assets/futsal.png')}  />
      <button  style={styles.button3}>futsal</button>
      </view>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    width: '100%',
    height: '100%',
  },
  img1: {
    maxHeight: '290px',
    maxWidth: '290px',
  },
  container1: {
    backgroundColor: 'beige',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  button1:{
    backgroundColor: 'gray',
    border: '25px',
    whidth: '20px',
    height: '20px',
    borderRadius: '5px',
  },
  button2:{
    backgroundColor: 'gray',
    border: '25px',
    whidth: '20px',
    height: '20px',
    borderRadius: '5px',
  },
  img2:{
    maxHeight: '260px',
    maxWidth: '260px',
  },
  button3:{
    backgroundColor: 'gray',
    border: '25px',
    whidth: 20,
    height: 20,
    borderRadius: '5px',
  }
});
