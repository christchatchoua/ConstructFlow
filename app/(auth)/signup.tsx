import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'; // Import expo-image-picker
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('worker');
  const [tel, setTel] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  
  // State for date picker visibility and date value
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to handle image picker
  const handleImagePick = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        setProfilePicture(result.assets[0]);
      }
    } else {
      alert("Permission to access media library is required.");
    }
  };

  // Handle date change
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate.toLocaleDateString()); // Set the date in the format you need
  };

  // Toggle date picker visibility
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSignup = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('dob', dob);
      formData.append('location', location);
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('role', role);
      formData.append('tel', tel);
      formData.append('accountNumber', accountNumber);

      if (profilePicture) {
        formData.append('profilePicture', {
          uri: profilePicture.uri,
          type: profilePicture.type,
          name: profilePicture.fileName,
        });
      }

      const response = await axios.post('http://localhost:5000/api/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Signup error', error);
      alert('Error during signup');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      
      {/* Date of Birth Input with Date Picker */}
      <TouchableOpacity onPress={showDatepicker} style={styles.input}>
        <Text style={{ color: dob ? '#000' : '#ccc' }}>{dob || 'Select Date of Birth'}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Picker
        selectedValue={role}
        style={styles.input}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Worker" value="worker" />
        <Picker.Item label="Supervisor" value="supervisor" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={tel}
        onChangeText={setTel}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />

      {/* Profile Picture Upload */}
      <TouchableOpacity onPress={handleImagePick}>
        <Text style={styles.buttonText}>
          {profilePicture ? 'Change Profile Picture' : 'Upload Profile Picture'}
        </Text>
      </TouchableOpacity>

      {/* Show selected profile picture */}
      {profilePicture && (
        <Image 
          source={{ uri: profilePicture.uri }} 
          style={styles.profileImage} 
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default SignupScreen;
