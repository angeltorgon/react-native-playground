import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Page1(props) {
    const { navigate, push } = props.navigation

    const handleClick = () => {
        push("Page1");
        console.log(props.navigation.getParam("name"));
    };

    return (
        <View>
            <Text>{props.navigation.getParam("name")}</Text>
            <Button color="black" onPress={handleClick} styles={styles.continueButton} title="Get Started" />
        </View>
    )
}

const styles = StyleSheet.create({
    continueButton: {
        width: 30
    }
});