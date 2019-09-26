import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Page2(props) {
    const { navigate } = props.navigation

    const handleClick = () => {
        console.log("Click!", props.navigation);
        navigate("Register");
    };

    return (
        <View>
            <Text>Page2</Text>
            <Button color="black" onPress={handleClick} styles={styles.continueButton} title="Get Started" />
        </View>
    )
}

const styles = StyleSheet.create({
    continueButton: {
        width: 30
    }
});