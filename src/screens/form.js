import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Linking } from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/button';
import First from '../components/formfields/first';
import Second from '../components/formfields/second';
import Third from '../components/formfields/third';
import Fourth from '../components/formfields/fourth';
import Fifth from '../components/formfields/fifth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import DateTimePicker from '@react-native-community/datetimepicker';

function Form({ navigation }) {
    const [next, setnext] = useState('Next');
    const [formno, setformno] = useState(0);
    const onnext = () => {
        if (formno === 3) {
            setnext('Send Form')
        }
        if (formno === 4) {
            navigation.navigate('Message')
        }
        if (formno <= 4) {
            setformno(formno => formno + 1);
        }
    }
    const onback = () => {
        if (formno === 0) {
            navigation.goBack();
        }
        if (formno >= 0) {
            setformno(formno => formno - 1);
        }
    }


    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}
            keyboardShouldPersistTaps="handled">
            <View style={{ display: 'flex', height: '100%' }}>
                <TouchableOpacity onPress={()=>onback()} style={{position:'absolute', top:30, left:15, zIndex:10, fontSize:20}}><Text>{'➡️'}</Text></TouchableOpacity>
            <Image source={require('../assets/colourtriangle.png')} style={{ width: '100%', height:'30%', position:'absolute' }} />
                    <View style={{ height:'23%', display:'flex', justifyContent:'center', alignItems:'center' }}>

                        <Image source={require('../assets/colouricon.png')} style={{ width: 182, height:118  }} />
                        
                    </View>
                <View style={{  }}>
                    <Text style={{ textAlign: 'center', fontSize: 28, lineHeight: 28, marginBottom: 5, fontWeight:'700' }}>Fill THE FORM</Text>
                    <Text style={{ textAlign: 'center' }}>area with * must be filled</Text>
                </View>
                <View style={{paddingHorizontal:20}}>
                {formno === 0 ? <First callback={onnext} label={next}  /> : ( formno === 1 ? <Second  callback={onnext} label={next}  />:( formno === 2 ?<Third  callback={onnext} label={next}  />:( formno === 3 ?<Fourth  callback={onnext} label={next}  />:<Fifth  callback={onnext} label={next}  />)))}

                {/* <Button callback={onnext} label={next} title="Show date picker!" /> */}
                </View>
            </View>
        </ScrollView>
    )
}

export default Form