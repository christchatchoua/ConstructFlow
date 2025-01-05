import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native';

type BlueButtonprops =  {
title: string;
};

const BlueButton:React.FC<BlueButtonprops> = ({title ="Button" }) =>{
return(
    <TouchableOpacity  style={styles.button}> <Text style={styles.text}>{title}</Text></TouchableOpacity>
)
};
const styles = StyleSheet.create({
button:{
    padding: 10,
    alignItems:'center',
    backgroundColor:'#2563EB',
    borderRadius: 15,
    width:100,
},
text:{
    color:'#fff'
},
});

export default BlueButton;
