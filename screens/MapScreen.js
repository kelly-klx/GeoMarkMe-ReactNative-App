import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {

  const [markerObjects, setMarkerObjects] = useState([])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 49.26140,
            longitude: -123.24858,
            latitudeDelta: 0.01,
            longitudeDelta: 0.004,
          }}
          customMapStyle={mapStyle}
          onPress={e => {
            setMarkerObjects([
              {
                lat: e.nativeEvent.coordinate.latitude,
                lnt: e.nativeEvent.coordinate.longitude,
              }
            ])
          }}
          >
            {
              markerObjects.map((marker, index) => (
                <Marker
                  key={index}
                  image={require('../assets/Marker.png')}
                  title={'Title of the marker goes here'}
                  description={'Description of the marker goes here'}
                  draggable coordinate={
                  {latitude: marker.lat, longitude: marker.lnt}}
                />
              ))
            }
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const mapStyle = [
  //can add styles here if desired
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});