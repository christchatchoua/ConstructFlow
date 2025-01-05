import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native';

type OrangeButtonprops = {
title: string;
};

const OrangeButton:React.FC<OrangeButtonprops> = ({title="Button"}) =>{
return(
    <TouchableOpacity style={styles.button}> <Text style={styles.text}>{title}</Text></TouchableOpacity>
)
};
const styles = StyleSheet.create({
button:{
    padding: 10,
    alignItems:'center',
    backgroundColor:'#F97316',
    borderRadius: 15,
    width: 100,
},
text:{
    color:'#fff'
},
});

export default OrangeButton;