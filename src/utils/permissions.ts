import { Platform, PermissionsAndroid, Alert } from 'react-native';

export const locationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          buttonPositive: 'Allow',
          buttonNegative: 'Deny',
          title: 'Location Permission Required',
          message: 'Application needs access to your location to work',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        // If permission denied then show alert
        Alert.alert('Error', 'Location Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.log(err);
    }
  }
};
