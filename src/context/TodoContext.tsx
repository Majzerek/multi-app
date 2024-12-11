import { createContext, FormEvent, ReactNode, useContext,useEffect,useState } from "react";

export type TodoType = {
    id: number,
    text: string,
    completed: boolean,
}



type TodoContextType = {
    todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
    inputTxt: string,
    setInputTxt: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleComplete: (id: number) => void,
    deleteTodo: (id: number) => void,
    uncompleteTask: () => number,
    completeTodo: () => number,
}
interface Child {
    children: ReactNode
}
const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider = ({ children }: Child) => {

    const loadTodoList = () => {
        const savedTodoList = localStorage.getItem("TODO");
        return savedTodoList ? JSON.parse(savedTodoList) : [];
      };
    const [todos, setTodos] = useState<TodoType[]>(loadTodoList())
    const [inputTxt, setInputTxt] = useState('')

   
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (inputTxt === '') return
    
        const newTodo: TodoType = {
            id: new Date().getTime(),
            text: inputTxt,
            completed: false
        }
    
        setTodos([...todos, newTodo])
        setInputTxt('')
    }
    useEffect(() => {
        localStorage.setItem('TODO', JSON.stringify(todos))
    },[ todos])

    const handleComplete = (id: number) => {
        const updateTodo = todos.map((todo) => {
            if (todo.id === id && !todo.completed) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }

            return todo
        })
        setTodos(updateTodo)
    }
    
    const deleteTodo = (id: number) => {
        const updateTodo = todos.filter((item: TodoType) => item.id !== id);
        setTodos(updateTodo)
    }
    const completeTodo = (): number => {
        const complete = todos.filter((todo: TodoType) => todo.completed)
        return complete.length
    }
    const uncompleteTask = (): number => {
        const complete = todos.filter((todo: TodoType) => !todo.completed)
        return complete.length
    }
    return (
        <TodoContext.Provider 
        value={{
            todos, 
            setTodos, 
            inputTxt, 
            setInputTxt,
            deleteTodo,
            handleComplete,
            handleSubmit,
            completeTodo,
            uncompleteTask
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    const context = useContext(TodoContext)
    if(!context) {
        throw new Error("useTodoContext must be use within TodoProvider")
    }
    return context
}