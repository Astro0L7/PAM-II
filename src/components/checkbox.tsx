import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Checkbox(props) {
    return (
        <TouchableOpacity style={styles.checkbox} activeOpacity={0.7}>
            <Text></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 25,
        height: 25,
        marginRight: 12,
        borderWidth: 1,
        borderColor: 'rgba(105, 105, 105, 1)',
    }
})