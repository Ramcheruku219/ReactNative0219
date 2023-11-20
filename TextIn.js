import React from "react";
import {View,Text}from 'react-native';
import { TextInput } from "react-native-paper";

const TextIn = ({label,myvalue,value, })=>{

    return(
        <View style={{margin:10}}>
            <TextInput
            label={label}
            placeholder={label}
            placeholderTextColor="#888"
            mode="outlined"
            style={{backgroundColor:'#fff'}}
            value={value}
            onChangeText={myvalue}

            />

</View>
    )
}

export default TextIn;