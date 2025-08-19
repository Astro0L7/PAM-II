import Title from '../components/title';
import Input from '../components/input';
import Container from '../components/container';
import MyButton from '../components/myButton';
import AddTask from '../components/addTask';
import List from '../components/list'
import Task from '../components/task';
import Checkbox from '../components/checkbox';
import Label from '../components/label';


/*
    Metas para concluir o projeto To-Do:
- Atualizar o botão de adicionar tarefa: O botão deve pegar o texto do input e setar na label de tarefa
- Colocar as task's em um vetor: sempre que uma nova for criada ela deve ser adicionada no último espaço do vetor
- Deixar o checkbox funcional
- Adicionar novas funcionalidades: excluir tarefa, editar tarefa e outras.
*/


export default function App() {
    return (
        <Container>
            <Title size="h1">Lista de Tarefas</Title>
            <AddTask>
                <Input size='medium'/>
                <MyButton size='small'/>
            </AddTask>
            <List>
                <Task>
                    <Checkbox></Checkbox> <Label></Label>
                </Task>
                <Task>
                    <Checkbox></Checkbox> <Label></Label>
                </Task>
                <Task>
                    <Checkbox></Checkbox> <Label></Label>
                </Task>
                <Task>
                    <Checkbox></Checkbox> <Label></Label>
                </Task>
                <Task>
                    <Checkbox></Checkbox> <Label></Label>
                </Task>
            </List>
        </Container>
    );
}