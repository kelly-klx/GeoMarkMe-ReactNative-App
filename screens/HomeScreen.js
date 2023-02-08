import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function HomeScreen( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
        <Image
        style={styles.icon}
        source={require('../assets/HomeIcon.png')}/>
      <TouchableOpacity
      onPress={() => navigation.navigate("Map")}>
        <Image
        style={styles.button}
        source={require('../assets/HomeButton.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 295,
    height: 204,
  },
  button: {
    width: 240,
    height: 76,
    margin: 44,
  }
});
