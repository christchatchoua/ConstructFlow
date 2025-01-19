<<<<<<< HEAD
// Example for worker/index.tsx
import React from 'react';
import { View, Text } from 'react-native';

const WorkerHome = () => (
  <View>
    <Text>Worker Dashboard</Text>
  </View>
);

export default WorkerHome;
=======
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
>>>>>>> e8527208541b9e4516d42332d7af96d31ba61960
