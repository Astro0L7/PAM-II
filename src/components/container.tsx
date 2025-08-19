import { View, StyleSheet } from "react-native";

export default function Container(props) {
    return (
        <View style={styles.container}> {props.children} </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: 'rgb(240, 248, 255)', // cor oficial
        // backgroundColor: 'rgba(161, 206, 245, 1)', // cor para visualizar limites do layout
        
    },
})