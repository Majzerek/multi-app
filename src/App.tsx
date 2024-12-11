import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { Todo } from './pages/Todo'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Main />} path='/multi-app/' />
        <Route element={<Todo />} path='/multi-app/todo/' />
      </Routes>
    </BrowserRouter>
  )
}

