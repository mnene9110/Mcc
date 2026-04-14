import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MCC App 🚀</Text>

      <Button
        title="Click Me"
        onPress={() => Alert.alert("Hello", "Your app is working!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});
