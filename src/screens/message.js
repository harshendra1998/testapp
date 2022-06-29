import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Linking } from 'react-native';
import InputBox from '../components/InputBox';
import Button from '../components/button';
// import DateTimePicker from '@react-native-community/datetimepicker';

function Message({ navigation }) {

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}
            keyboardShouldPersistTaps="handled"><Image source={require('../assets/colourtriangle.png')} style={{ width: '100%', height:'30%', position:'absolute' }} />
            <View style={{ height:'25%', display:'flex', justifyContent:'center', alignItems:'center' }}>

                <Image source={require('../assets/colouricon.png')} style={{ width: 182, height:118  }} />
                
            </View>
            <View style={{ padding: 25, display:'flex', height:'100%' }}>
                <View>
                    <Text style={{color:'black', fontSize:18}}>Glad to see you, friend!</Text>
                    <Text style={{color:'black', marginTop:18, fontSize:18}}>{`           `}<Text style={{fontWeight: "bold"}}>SPRY ROCKS</Text> is a rapidly developing European company with headquarter at Kharkiv, Ukraine.</Text>
                    <Text style={{color:'black', marginTop:18, fontSize:18}}>{`           `}Our company was founded in 2014 and although we are a young team we have a lot of successful projects and satisfied customers. </Text>
                    <Text style={{color:'black', marginTop:18, fontSize:18}}>{`           `}In work with every particular customer, the main philosophy is to establish and keep good relations.</Text>
                    <Text style={{color:'black', marginTop:18, fontSize:18}}>{`           `}We develop innovative solutions that not only contribute to the success of our customer's businesses but also give them a competitive market advantage.</Text>
                    <Text style={{color:'black', marginTop:18, fontSize:18}}>{`           `}Because your success is our success too!</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Message