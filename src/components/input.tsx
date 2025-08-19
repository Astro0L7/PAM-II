import { useState } from 'react';
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
    const [task, setTask] = useState("");
    return (
        <TextInput 
            style = {styles[props.size]}
            value = {task}
            onChangeText = {setTask}
            placeholder = "Digite uma tarefa"
        />
    )
}

const styles = StyleSheet.create({
    large: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgba(105, 105, 105, 1)',
        paddingHorizontal: 3,
    },
    medium: {
        width: '65%',
        borderBottomWidth: 1,
        borderColor: 'rgba(105, 105, 105, 1)',
        paddingHorizontal: 3,
    },
    small: {
        width: '40%',
        borderBottomWidth: 1,
        borderColor: 'rgba(105, 105, 105, 1)',
        paddingHorizontal: 3,
    },
})