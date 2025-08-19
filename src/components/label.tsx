import { Text, StyleSheet } from 'react-native';

export default function Label(props) {
    return (
        <Text style={styles.font}>Tarefa X</Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontSize: 17,
        color: 'rgba(58, 58, 58, 1)',
    }
})