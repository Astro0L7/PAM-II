import Title from '../components/title';
import Input from '../components/input';
import Container from '../components/container';
import MyButton from '../components/myButton';
import AddTask from '../components/addTask';

export default function App() {
    return (
        <Container align='left'>
            <Title size="h1">Lista de Tarefas - CHILDREN</Title>
            <AddTask direction='row'>
                <Input size='medium' border='thin'/>
                <MyButton type='button'/>
            </AddTask>
        </Container>
    );
}

// MUITA COISA PRA CORRIGIR E FINALIZAR:
// addTask: Seção para alinhar o botão com o input
// myButton: TouchableOpacity -> estilizar corretamente
// finalizar todos os componentes, criar mais componentes e alinhar