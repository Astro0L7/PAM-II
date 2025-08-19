import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MyButton(props) {
    return (
        <TouchableOpacity style={[styles.button, styles[props.size]]} activeOpacity={0.8}> 
            <Text style={styles.texto}>Adicionar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    large: {
        width: '100%',
    },

    medium: {
        width: '60%',
    },
    small: {
        width: '30%',
    },

    button: {
        backgroundColor: 'rgba(64, 115, 255, 1)',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    
    texto: {
        fontWeight: 'bold',
        color: 'rgb(255, 255, 255)',
    }
})