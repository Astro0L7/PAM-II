import { View, StyleSheet } from 'react-native';

export default function Task(props) {
    return (
        <View style={styles.taskStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    taskStyle: {
        width: 'auto',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        // backgroundColor: 'rgba(239, 247, 194, 1)', // cor para visualizar limites do layout
    }
})