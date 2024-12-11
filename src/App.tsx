import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { ToDoList } from './components/ToDoList'
import { TodoProvider } from './context/TodoContext'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<Main />} path='/' />
        <Route element={
          <TodoProvider>
            <ToDoList />
          </TodoProvider>} path='/todo' />
      </Routes>
    </BrowserRouter>
  )
}

