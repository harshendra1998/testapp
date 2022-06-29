import React,{useState} from 'react'
import InputBox from '../InputBox';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Linking } from 'react-native';
import Button from '../button';

export default function Fourth(props) {

    const [place, setplace] = useState('');
    const [posotion, setPosotion] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = ()=>{ props.callback()}

  return (
    <View style={{ marginTop: '20%', flex:1 }}>
    <Text style={{fontSize:22, marginBottom:22, color: '#7A4ED9'}}>Work EXPIERENCE</Text>
    <InputBox
        label="Place of Work"
        value={place}
        onChangeText={text => setplace(text)}
        style={{ marginBottom: 20 }}
    />

    <InputBox
        label="Position Held"
        value={posotion}
        onChangeText={text => setPosotion(text)}
        style={{ marginBottom: 20 }}
    />
    <View style={{display:'flex', flexDirection:'row'}}>
    <InputBox
        label="Start"
        value={start}
        extrastyle={{flex:1, marginRight:4}}
        onChangeText={text => setStart(text)}
        style={{ marginBottom: 20 }}
    />
    <InputBox
        label="End"
        value={end}
        extrastyle={{flex:1, marginLeft:4}}
        onChangeText={text => setEnd(text)}
        style={{ marginBottom: 20 }}
    />
    </View>
    <Button
        callback={() => {
          handleSubmit();
        }}
        label={props.label}
      />

</View>
  )
}
