import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getApps, GetAppResult } from 'react-native-map-link';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LinkMap = () => {
  const [availableApps, setAvailableApps] = useState<GetAppResult[]>([]);
  useEffect(() => {
    (async () => {
      const result = await getApps({
        latitude: 74.359725,
        longitude: 31.573609,
        title: 'location',
        googleForceLatLon: false,
        alwaysIncludeGoogle: true,
        appsWhiteList: ['google-maps'],
      });
      setAvailableApps(result);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {availableApps.map(({ id, open }) => (
        <TouchableOpacity key={id} onPress={open}>
          <Text>Open location</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
  },
});

export default LinkMap;
