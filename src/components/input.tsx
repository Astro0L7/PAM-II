import { useState } from 'react';
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
    const [text, setText] = useState("");
    return (
        <TextInput 
            style = {[styles[props.size], styles[props.border]]}
            value = {text}
            onChangeText = {setText}
            placeholder = "Digite uma tarefa"
        />
    )
}

const styles = StyleSheet.create({
    large: {
        width: '50%',
        height: 30,
    },
    medium: {
        width: '35%',
        height: 30,
    },
    small: {
        width: '20%',
        height: 30,
    },

    thin: {
        borderWidth: 1,
        paddingHorizontal: 3,
    },

    thick: {
        borderWidth: 2,
        paddingHorizontal: 3,
    }
})