import { Text, StyleSheet } from "react-native";

export default function Title(props) {
    return ( 
        <Text style = {styles[props.size]}> 
            {props.children} 
        </Text>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: "bold",
    },
    
    h2: {
        fontSize: 20,
        fontWeight: "bold",
    }
})