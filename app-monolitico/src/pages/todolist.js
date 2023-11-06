import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import '../App.css';


function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: uuid(),
            description: newTask
        };
        setTasks([...tasks, task]);
        setNewTask('');
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    function handleDeleteTask(id) {
        setTasks(oldTasks => oldTasks.filter(task => task.id !== id));
    }

    return (
        <div className='App'>
            <div style={{ display: "center", justifyContent: "center", width: "100%", padding: "0rem" }}>
                <h1 style={{ textAlign: "center" }}>Todo List</h1>
                <p style={{ textAlign: "center" }}>Um Todo List é uma lista de tarefas que precisam ser realizadas. É uma ferramenta útil para organizar as atividades do dia a dia.</p>
                <h2>Exemplos de tarefas:</h2>
                <div>
                    <ul>
                        <li>Fazer compras no mercado</li>
                        <li>Ligar para o médico</li>
                        <li>Enviar e-mail para o chefe</li>
                        <li>Estudar para a prova</li>
                    </ul>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div>
                    <h1>Criar Tarefa</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField type="text" value={newTask} onChange={handleChange} fullWidth style={{ width: "100%" }} />
                        <Button variant='contained' type="submit" style={{ marginTop: "1rem" }}>Add Task</Button>
                    </form>
                </div>
            </div>


            <h1>Listagem</h1>
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{textAlign: "center"}}>Código</TableCell>
                            <TableCell style={{textAlign: "center"}}>Descrição</TableCell>
                            <TableCell style={{textAlign: "center"}}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ alignItems: "center" }}>
                        {tasks.length === 0 && <TableRow><TableCell colSpan={3} style={{textAlign: "center"}}>Nenhuma tarefa cadastrada</TableCell></TableRow>}
                        {tasks.map(task => (
                            <TableRow key={task.id}>
                                <TableCell style={{ textAlign: "center" }}>{task.id}</TableCell>
                                <TableCell style={{ textAlign: "center" }}>{task.description === "" ? "Sem descrição" : task.description}</TableCell>
                                <TableCell style={{ textAlign: "center" }}>
                                    <Button onClick={() => handleDeleteTask(task.id)} variant='contained'><DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

        </div>
    );
}

export default App;
