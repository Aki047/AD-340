import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function UserProfilePage() {
    const { id } = useLocalSearchParams();
    console.log('Rendering UserProfilePage with ID:', id);

    return (
        <View>
            <Text>User Profile Page</Text>
            <Text>User ID: {id}</Text>
        </View>
    );
}
s
