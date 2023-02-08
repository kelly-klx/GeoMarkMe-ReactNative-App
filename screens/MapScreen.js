import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
      style={styles.text}>MAP GOES HERE !</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#044F4F',
    fontSize: 24,
  }
});