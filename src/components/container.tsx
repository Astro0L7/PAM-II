import { View, StyleSheet } from "react-native";

export default function Container(props) {
    return (
        <View style={styles[props.align]}> {props.children} </View>
    )   
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal: 10, 
    },

    left: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingHorizontal: 10,

    },

    right: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingTop: 20,
        paddingHorizontal: 10, 
    },
})