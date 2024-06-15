import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Gallery from './src/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/favicon.png')} style={styles.favicon} />
        <Text style={styles.headerText}>Holly's Kitchen</Text>
      </View>
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    paddingTop: 20,
    backgroundColor: '#000', // Black background
    alignItems: 'center',
    marginTop: 60, // Move the header down by 40 units
  },
  headerText: {
    color: '#fff', // White font
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  favicon: {
    width: 60, // Adjust the size as needed
    height: 60,
  },
});
