import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, ImageBackground, Image, Linking } from 'react-native';
import GROUPGRAY from '../assets/groupgray.svg'
import Button from '../components/button';

function Home({ navigation }) {
    const [name, setName] = useState('');
    const [posotion, setPosotion] = useState('');
    const [birth, setBirth] = useState('');
    const image = { uri: "../assets/splashhome.jpg" };

    return (
        <ImageBackground source={require('../assets/splashhome.jpg')} resizeMode="cover" style={{ height: '100%' }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, backgroundColor: '#000745aa' }}
                keyboardShouldPersistTaps="handled">
                <View style={{ height: '100%', display: 'flex' }}>

                <Image source={require('../assets/graytriangle.png')} style={{ width: '100%', height:'30%', position:'absolute' }} />
                    <View style={{ height:'35%', display:'flex', justifyContent:'center', alignItems:'center' }}>

                        <Image source={require('../assets/grayicon.png')} style={{ width: 182, height:68  }} />
                        <Text style={{fontSize:45, color:'white'}}>SPRY ROCKS</Text>
                        
                    </View>
                    <View style={{flex:1, display:'flex', justifyContent:'space-around'}}>
                    <View style={{}}><View style={{ width: '100%' }}></View>
                        <Text style={{ color: 'white', fontSize: 46, textAlign: 'center' }}>Welcome!</Text>
                    </View>
                    <View>

                        <Text style={{ color: 'white', fontSize: 21, textAlign: 'center' }}>Want to be a part of team?</Text>
                        <Button callback={() => navigation.navigate('Form')} label={'Send Form'} style={{ marginHorizontal: 36 }} />
                    </View>
                    <View style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Image source={require('../assets/info.png')} style={{ width: 32, height:32 , marginBottom:16 }} />
                    <Text style={{ color: 'white', fontSize: 24,alignContent:'center',textAlign:'center', textDecorationLine: 'underline' }}>spryrocks.com</Text>
                    </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Home