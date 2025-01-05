import { Text, View, SafeAreaView,StyleSheet } from "react-native";
import CustomTextInput from '@/components/CustomTextInput';
import BlueButton from '@/components/BlueButton';
import {Link} from 'expo-router';

export default function login() {
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.form}>
        <CustomTextInput placeholder="full name" style={styles.TextInput}/>
        <CustomTextInput placeholder="phone number" style={styles.TextInput}/>
        <CustomTextInput placeholder="password" style={styles.TextInput}/>
        <View style={styles.button}>
         <BlueButton title="LOGIN"/>
        <Text style={styles.text}> It is your first time here? <Link href="/signup"  style={styles.link}>Signup</Link></Text>
        </View>
        
        </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
container:{
backgroundColor: "#1E293B", 
width:"100%",
height:"100%",
},
form:{
marginTop:"15%",
display: "flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
},
TextInput:{
marginBottom: 20, // Adds spacing between input fields
},
button:{
alignItems:'center',
},
text:{
color:'#fff',
marginTop:10,
},
link:{
textDecorationLine:"underline",
}
});