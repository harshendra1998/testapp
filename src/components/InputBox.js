import React, {useState} from 'react';
import { TextInput, View, Text } from 'react-native';

function InputBox({label, value, onChangeText,extrastyle,onBlur,error,submitted, require=false, multiline=false, numeric, style, numberOfLines=1, ...rest}) {

    return (
        <View style={extrastyle}>
            <Text style={{fontSize:16, color:'black'}}>{label}{require&&<Text style={{color:'red'}}>*</Text>}</Text>
        <TextInput
            label={label}
            value={value}
            numberOfLines={numberOfLines}
            multiline={multiline}
            onBlur={onBlur}
            onChangeText={text => onChangeText(text)}
            style={{ paddingHorizontal: 20,borderWidth:2, borderColor: '#5C5C5C', backgroundColor: 'transparent', borderRadius:3,  marginBottom: 10}}
            keyboardType={numeric && 'numeric'}
        />
        {require && submitted && error&&<Text style={{color:'red', fontSize:10, ...style}}>{error}</Text>}
        </View>
    )
}

export default InputBox