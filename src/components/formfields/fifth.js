import React,{useState} from 'react'
import InputBox from '../InputBox';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Linking } from 'react-native';
import Button from '../button';

export default function Fifth(props) {

    const [aboutfreetime, setaboutfreetime] = useState('');
    const [anyq, setanyq] = useState('');
    const [tick, setTick] = useState(false);
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = ()=>{ props.callback()}

  return (
    <View style={{ marginTop: '20%', flex:1 }}>
      
    <Text style={{fontSize:22, marginBottom:22, color: '#7A4ED9'}}>Your hobbies</Text>
    <InputBox
        label="How you spend your free time?"
        value={aboutfreetime}
        numberOfLines={5}
        multiline={true}
        onChangeText={text => setaboutfreetime(text)}
        style={{ marginBottom: 20, textAlignVertical: "top"  }}
    />

    <Text style={{fontSize:22, marginBottom:22, color: '#7A4ED9'}}>Additional Information</Text>
    <InputBox
        label="Have any questions for us?"
        value={anyq}
        numberOfLines={5}
        onChangeText={text => setanyq(text)}
        style={{ marginBottom: 20, textAlignVertical: "top" }}
    />
    <TouchableOpacity onPress={()=>setTick(!tick)}>
      <Text style={{fontSize:16, marginBottom:22, color: 'black'}}><View style={{width:19, height:19, display:'flex', justifyContent:'center', alignItems:'center', border: 2, backgroundColor:'#7A4ED9'}}>
        <View style={{height:15, width:15, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        {tick&&<View style={{height:10, width:10, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#7A4ED9'}}>
            
            </View>}
        </View>
        </View> {' '}I consent to the processing of personal data
        <Text style={{color:'red'}}>*</Text>
        </Text>
        </TouchableOpacity>
        {(submitted && !tick)&&<Text style={{color:'red', fontSize:10}}>*Accept The Condition</Text>}
        <Button
        callback={() => {
          setSubmitted(true);
          if(tick){
          handleSubmit();}
        }}
        label={props.label}
      />

</View>
  )
}
