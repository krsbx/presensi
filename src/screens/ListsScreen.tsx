import _ from 'lodash';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, KeyboardAvoidingView, View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, database, Timestamp } from '../utils/firebase';
import { ResourceWithId, IPresensi } from '../utils/interfaces';
import { globalStyle } from '../utils/styles';
import { postPresensi } from '../utils/actions';

const ListScreen = () => {
  const [presensis, setPresensis] = useState<ResourceWithId<IPresensi>>({});

  const submitPresensi = async () => {
    await postPresensi({
      location: (await Location.getCurrentPositionAsync()).coords,
    });
  };

  useEffect(() => {
    // Only logged in user can see this screen
    const UID = auth.currentUser!.uid;
    // Get all presensi data
    const subscribe = database
      .collection(UID)
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        const datas = snapshot.docs.map((doc) => {
          const data = doc.data() as IPresensi;
          data.id = doc.id;

          return data;
        });

        const dict = _.keyBy(datas, 'id');

        setPresensis(dict);
      });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={globalStyle.container}>
      <View style={{ flex: 1, padding: 5, width: '100%' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, color: 'black' }}>Presensi Kehadiran</Text>
        </View>
        <FlatList
          style={{ flex: 1, marginVertical: 5 }}
          data={_.toArray(presensis)}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.presentContainer}>
              <View style={styles.container}>
                <Text style={[{ flex: 1 }, styles.text]}>
                  {moment(
                    new Timestamp(item.timestamp.seconds, item.timestamp.nanoseconds).toDate()
                  ).format('HH:MM:SS a')}
                </Text>
                <Text style={[{ flex: 1 }, styles.text]}>
                  {moment(
                    new Timestamp(item.timestamp.seconds, item.timestamp.nanoseconds).toDate()
                  ).format('MMM DD, YYYY')}
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={[{ flex: 1 }, styles.text]}>Latitude : {item.location.latitude}</Text>
                <Text style={[{ flex: 1 }, styles.text]}>
                  Longitude : {item.location.longitude}
                </Text>
              </View>
            </View>
          )}
        />
        <Button title={'Rekam Kehadiran!'} onPress={submitPresensi} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 5,
  },
  presentContainer: {
    flex: 1,
    padding: 4,
    marginVertical: 5,
    backgroundColor: '#B8FFF9',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default ListScreen;
