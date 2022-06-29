import React, {useState} from 'react';
import InputBox from '../InputBox';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
} from 'react-native';
import Button from '../button';

export default function Second(props) {
  const [educational, seteducational] = useState('');
  const [Specialization, setSpecialization] = useState('');
  const [graduatedYear, setgraduatedYear] = useState('');

  const handleSubmit = ()=>{ props.callback()}

  return (
    <View style={{marginTop: '20%', flex: 1}}>
      <Text style={{fontSize: 22, marginBottom: 22, color: '#7A4ED9'}}>
        education
      </Text>
      <InputBox
        label="1. Educational Institution"
        value={educational}
        onChangeText={text => seteducational(text)}
        style={{marginBottom: 20}}
      />

      <InputBox
        label="Specialization"
        value={Specialization}
        onChangeText={text => setSpecialization(text)}
        style={{marginBottom: 20}}
      />

      <InputBox
        label="Graduated Year"
        value={graduatedYear}
        onChangeText={text => setgraduatedYear(text)}
        style={{marginBottom: 20}}
      />
      <Button
        callback={() => {
          handleSubmit();
        }}
        label={props.label}
      />
    </View>
  );
}
