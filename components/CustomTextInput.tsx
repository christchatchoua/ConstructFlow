import React from 'react';
import {TextInput , StyleSheet, TextInputProps} from 'react-native'

type CustomTextInputProps = TextInputProps & {
    placeholder: string;

};
const CustomTextInput: React.FC<CustomTextInputProps> = ({placeholder,style}) => {
    return (
          <TextInput  style={[styles.TextInput, style]} placeholder={placeholder} placeholderTextColor="#9CA3AF"  />  
    );
};
const styles=StyleSheet.create({
TextInput:{
width: 250,
alignItems:'center',
justifyContent:'center',
padding: 12, // Adds inner spacing for better usability
borderWidth: 1, // Adds a border
borderColor: "#ccc", // Subtle border color
borderRadius: 10, // Rounded corners
backgroundColor: "#ffffff", // White background for inputs
color: "#333", // Input text color
},
});
export default CustomTextInput;