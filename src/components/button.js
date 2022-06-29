import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity } from 'react-native';

function Button({callback, label, style, ...rest}) {

    return (
            <TouchableOpacity
                onPress={() => callback()}
                style={{height: 54, justifyContent: 'center'}}
            >
                <Text style={[{textAlign: 'center', fontSize:19, color:'white', backgroundColor:'#7A4ED9', padding:12, borderRadius: 10},style]}>{label}</Text>
            </TouchableOpacity>
    )
}

export default Button