import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
    return (
        <View>
            <Text>Home Page</Text>
            <Link href="/AboutPage">Go to About Page</Link>
            <Link href="/user/1">Go to User Profile Page</Link>
        </View>
    );
}
