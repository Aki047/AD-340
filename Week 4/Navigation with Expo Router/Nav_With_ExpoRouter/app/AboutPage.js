import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AboutPage() {
    const router = useRouter();

    return (
        <View>
            <Text>About Page</Text>
            <Button title="Go to Home (Push)" onPress={() => router.push('/Homepage')} />
            <Button title="Go to Home (Replace)" onPress={() => router.replace('/Homepage')} />
        </View>
    );
}