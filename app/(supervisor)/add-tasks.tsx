import { Text, View, SafeAreaView,StyleSheet } from "react-native";
import CustomTextInput from '@/components/CustomTextInput';
import BlueButton from '@/components/BlueButton';
import {Link} from 'expo-router';

export default function addTask() {
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.form}>
        <CustomTextInput placeholder="task name" style={styles.TextInput}/>
        <CustomTextInput placeholder="description" style={styles.TextInput}/>
        <CustomTextInput placeholder="task id" style={styles.TextInput}/>
        <CustomTextInput placeholder="duration" style={styles.TextInput}/>
        <View style={styles.button}>
         <BlueButton title="ADD TASK"/>
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