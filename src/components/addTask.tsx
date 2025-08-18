import { View, StyleSheet } from "react-native";

export default function AddTask(props) {
    return (
        <View style={styles[props.direction]}> {props.children} </View>
    )
}

const styles = StyleSheet.create({
    row: {
        width: 'auto',
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    
})