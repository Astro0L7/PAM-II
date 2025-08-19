import { View, StyleSheet } from "react-native";

export default function AddTask(props) {
    return (
        <View style={styles.alignRow}> {props.children} </View>
    )
}

const styles = StyleSheet.create({
    alignRow: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
})