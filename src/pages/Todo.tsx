import { ToDoList } from "../components/ToDoList"
import { TodoProvider } from "../context/TodoContext"

export const Todo = () => {
    return (
      
            <TodoProvider>
                <ToDoList />
            </TodoProvider>
      
    )
}