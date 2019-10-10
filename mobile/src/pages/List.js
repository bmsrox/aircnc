import React, { useEffect, useState } from 'react';
import { 
  AsyncStorage, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  ScrollView,
  Alert
} from 'react-native';
import socketio from 'socket.io-client';
import SpotList from '../components/SpotList';

import logo from '../assets/logo.png'

export default function List () {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('aircnc@user').then(user_id => {
      const socket = socketio('http://192.168.43.177:3001', {
        query: { user_id }
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}.`)
      })
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('aircnc@techs')
        .then( storagedTechs => {
          const techsArray = storagedTechs.split(',').map(tech => tech.trim())

          setTechs(techsArray);
        })
  }, []);

  function logoff () {
    AsyncStorage.removeItem('aircnc@user')
  }

  return <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={logo} />

    <ScrollView>
      {techs.map(tech => <SpotList key={tech} tech={tech} />)}
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10
  }
})