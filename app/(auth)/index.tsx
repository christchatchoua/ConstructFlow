import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { phoneNumber, password });
      if (response.data.token) {
        // Save the token in AsyncStorage or state
        navigation.navigate('Worksites'); // Redirect to the worksites management page
      } else {
        Alert.alert('Login failed', 'Invalid phone number or password');
      }
    } catch (error) {
      console.error('Login error', error);
      Alert.alert('Login failed', 'There was an error logging in');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Add Image at the top */}
        <Image
          source={require('../../assets/images/icon.png')} // Adjust the path to your icon file
          style={styles.icon}
        />
       <TextInput
  style={styles.input}
  placeholder="Phone Number"
  placeholderTextColor="#666" // Adjusted placeholder color for better visibility
  value={phoneNumber}
  onChangeText={setPhoneNumber}
  keyboardType="phone-pad"
/>
<TextInput
  style={styles.input}
  placeholder="Password"
  placeholderTextColor="#666" // Adjusted placeholder color for better visibility
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <View style={styles.linkContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  icon: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginBottom: 65,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
