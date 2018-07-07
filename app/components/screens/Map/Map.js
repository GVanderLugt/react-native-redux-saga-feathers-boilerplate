import React from 'react';

// components
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// styles
import styles from './styles';

const Map = function () {
  return (
    <View style={ styles.screenContainer }>
      <View style={ styles.mapContainer }>
        <MapView style={ styles.map }
          initialRegion={ {
            latitude:       37.78825,
            longitude:      -122.4324,
            latitudeDelta:  0.0922,
            longitudeDelta: 0.0421,
          } } >

          <Marker coordinate={ { latitude: 37.78825, longitude: -122.4324 } }
            title='Marker'
            description='Description'
            draggable />
        </MapView>
      </View>
    </View>
  );
};

export default Map;
