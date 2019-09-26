import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NewNavigator from './NewNavigator';

export default function Home(props) {
    const { navigate } = props.navigation
    const [name, setName] = useState('Angel');

    const handleClick = () => {
        navigate("NewNavigator", { name: name });
    };

    return (
        <View>
            <Text>Logo</Text>
            <Button color="black" onPress={handleClick} styles={styles.continueButton} title="Get Started" />
            <NewNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    continueButton: {
        width: 30
    }
});