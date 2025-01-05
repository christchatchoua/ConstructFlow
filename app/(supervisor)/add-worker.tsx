import { Text, View, SafeAreaView,StyleSheet } from "react-native";
import CustomTextInput from '@/components/CustomTextInput';
import BlueButton from '@/components/BlueButton';
import {Link} from 'expo-router';

export default function addWorker() {
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.form}>
        <CustomTextInput placeholder="first name" style={styles.TextInput}/>
        <CustomTextInput placeholder="last name" style={styles.TextInput}/>
        <CustomTextInput placeholder="gender" style={styles.TextInput}/>
        <CustomTextInput placeholder="phone number" style={styles.TextInput}/>
        <CustomTextInput placeholder="start date" style={styles.TextInput}/>
        <CustomTextInput placeholder="worker_id" style={styles.TextInput}/>
        <View style={styles.button}>
         <BlueButton title="SIGNUP"/>
        <Text style={styles.text}> Already have an account? <Link href="/(auth)" style={styles.link}> Login</Link></Text>
        </View>
        
        </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
container:{
backgroundColor: "#1e293b", 
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
marginBottom: 20, 
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