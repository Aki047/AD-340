import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex].url} style={styles.image} />
      <Text style={styles.description}>{images[currentIndex].description}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={handlePrevious}
          color="#FF0000" 
          disabled={currentIndex === 0}
        />
        <Button
          title="Next"
          onPress={handleNext}
          color="#FF0000" 
          disabled={currentIndex === images.length - 1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    color: '#fff', 
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default Gallery;
