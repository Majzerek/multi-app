import { Container } from "@mui/material"
import { ToDoList } from "../components/ToDoList"
import { TodoProvider } from "../context/TodoContext"

export const Todo = () => {
    return (
        <Container maxWidth='md' sx={{ height: '100vh' }}>
            <TodoProvider>
                <ToDoList />
            </TodoProvider>
        </Container>
    )
}