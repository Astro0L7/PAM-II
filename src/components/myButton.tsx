import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MyButton(props) {
    return (
        <TouchableOpacity style={styles[props.type]}> 
            <Text style={styles.texto}>Adicionar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        borderWidth: 1,
        backgroundColor: 'rgba(98, 127, 207, 1)',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    
    texto: {
        color: 'rgb(255, 255, 255)',
    }
})