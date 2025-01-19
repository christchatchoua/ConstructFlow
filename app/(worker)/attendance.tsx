import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
  const [attendance, setAttendance] = useState([]);

  // Function to format the date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString(); // Format date like "1/19/2025"
    const time = currentDate.toLocaleTimeString(); // Format time like "10:20:30 AM"
    return `${date} ${time}`;
  };

  const markAttendance = (name) => {
    const dateTime = getCurrentDateTime(); // Get current date and time
    setAttendance([...attendance, { name, status: 'Present', dateTime }]);
  };

  const resetAttendance = () => {
    setAttendance([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}: {item.status}</Text>
      <Text style={styles.dateTime}>{item.dateTime}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance UI</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => markAttendance("John Doe")} style={styles.button}>
          <Text style={styles.buttonText}>Mark Attendance for John</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => markAttendance("Jane Smith")} style={styles.button}>
          <Text style={styles.buttonText}>Mark Attendance for Jane</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={attendance}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />

      <TouchableOpacity onPress={resetAttendance} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Attendance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    buttonsContainer: {
      marginBottom: 20,
    },
    button: {
<<<<<<< HEAD
      backgroundColor: '#1E90FF',
=======
      backgroundColor: '#4CAF50',
>>>>>>> 5739c5006031bde07b4a342e3b917d4645994829
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    resetButton: {
      backgroundColor: '#f44336',
      padding: 10,
      marginTop: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    resetButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    list: {
      width: '100%',
    },
    item: {
      backgroundColor: '#e0e0e0',
      padding: 15,
      marginVertical: 5,
      borderRadius: 5,
    },
    text: {
      fontSize: 16,
    },
    dateTime: {
      fontSize: 12,
      color: '#888',
    },
  });
  
  export default App;