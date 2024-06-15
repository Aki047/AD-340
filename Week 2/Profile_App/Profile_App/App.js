import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, ScrollView, TextInput, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/Soot Sprites.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.overlay}>
            <View style={styles.header}>
              <Image
                source={require('./assets/images/Soot_Logo.png')}
                style={styles.logo}
              />
              <Text style={styles.headerText}>A Little About Me</Text>
            </View>
            <View style={styles.infoSection}>
              <Text style={styles.infoText}>Hello, my name is Holly.</Text>
              <Text style={styles.infoText}>I am a student software developer enrolled at North Seattle College.</Text>
              <Text style={styles.infoText}>This is my first mobile App.</Text>
              <Text style={styles.infoText}>In my free time, I love reading books and going to shows.</Text>
              <Text style={styles.infoText}>These are the lyrics to one of my favorite songs at the moment:</Text>
              <Text style={styles.infoText}>
                It can't be said I'm an early bird{'\n'}
                It's ten o'clock before I say a word{'\n'}
                Baby, I can never tell{'\n'}
                How do you sleep so well?{'\n'}
                You keep telling me to live right{'\n'}
                To go to bed before the daylight{'\n'}
                But then you wake up for the sunrise{'\n'}
                You know you don't gotta pretend, baby, now and then{'\n'}
                Don't you just wanna wake up, dark as a lake?{'\n'}
                Smelling like a bonfire, lost in a haze?{'\n'}
                If you're drunk on life, babe, I think it's great{'\n'}
                But while in this world{'\n'}
                I think I'll take my whiskey neat{'\n'}
                My coffee black and my bed at three{'\n'}
                You're too sweet for me{'\n'}
                You're too sweet for me{'\n'}
                I take my whiskey neat{'\n'}
                My coffee black and my bed at three{'\n'}
                You're too sweet for me{'\n'}
                You're too sweet for me{'\n'}
                Ooh, ooh-ooh{'\n'}
                Ooh, ooh-ooh{'\n'}
                Ooh, ooh-ooh{'\n'}
                Ooh, ooh-ooh{'\n'}
                I aim low, I aim true and the ground's where I go{'\n'}
                I work late where I'm free from the phone{'\n'}
                And the job gets done{'\n'}
                But you worry some, I know{'\n'}
                But who wants to live forever, babe?{'\n'}
                You treat your mouth as if it's Heaven's gate{'\n'}
                The rest of you like you're the TSA{'\n'}
                I wish that I could go along, babe, don't get me wrong{'\n'}
                You know, you're bright as the morning, as soft as the rain{'\n'}
                Pretty as a vine, as sweet as a grape{'\n'}
                If you can sit in a barrel, maybe I'll wait{'\n'}
                Until that day{'\n'}
                I'd rather take my whiskey neat{'\n'}
                My coffee black and my bed at three{'\n'}
                You're too sweet for me{'\n'}
                You're too sweet for me{'\n'}
                I take my whiskey neat{'\n'}
                My coffee black and my bed at three{'\n'}
                You're too sweet for me{'\n'}
                You're too sweet for me{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                Whoa, oh-oh{'\n'}
                I take my whiskey neat{'\n'}
                My coffee black and my bed at three{'\n'}
                You're too sweet for me{'\n'}
                You're too sweet for me
              </Text>
            </View>
            {Platform.OS !== 'web' && (
              <WebView
                style={styles.video}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://youtu.be/aezstCBHOPQ' }}
              />
            )}
            <View style={styles.inputForm}>
              <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#ccc" />
              <TextInput style={styles.input} placeholder="Enter your comment" placeholderTextColor="#ccc" />
              <Text style={styles.submitButton}>Submit</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: 20,
  },
  header: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent header
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  infoSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent info section
    padding: 10,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
  },
  video: {
    width: '100%',
    height: 360,
    marginVertical: 20,
  },
  inputForm: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent input form
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
  submitButton: {
    fontSize: 18,
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 10,
  },
});
