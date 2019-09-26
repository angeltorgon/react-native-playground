import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Register(props) {

    const { navigate } = props.navigation

    const handleClick = () => {
        navigate("Home");
    };

    return (
        <View>
            <Text>Profile Screen</Text>
            <TextInput placeholder="Username" />
            <Button onPress={handleClick} title="Go to Home" />
        </View>
    )
}
