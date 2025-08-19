import { View, StyleSheet } from 'react-native';

export default function List(props) {
    return (
        <View style={styles.listStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 30,
        // backgroundColor: 'rgba(247, 194, 227, 1)', // cor para visualizar limites do layout
    }
})