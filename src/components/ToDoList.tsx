import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import { useTodoContext } from '../context/TodoContext';

export const ToDoList = () => {
    const navigate = useNavigate()
    const { todos, 
        inputTxt, 
        setInputTxt, 
        handleComplete, 
        handleSubmit, 
        completeTodo, 
        uncompleteTask, 
        deleteTodo } = useTodoContext()
        
  
    return (

        <Container sx={{ height: '100vh' }}>
            <Typography variant='h1' color='secondary'>Todo App</Typography>

            <form onSubmit={handleSubmit}>
                <FormControl sx={{mb:2, mt:2}} >
                    <TextField type='text' label='Add Task' value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} />
                    <Button variant='contained' type='submit'>Add Todo</Button>
                </FormControl>
            </form>
            <Box bgcolor={'white'} textAlign={'left'} padding={2} borderRadius={2}>
                <Typography variant='h6'>Tasks: {todos.length}</Typography>
                <Typography variant='h6'>Uncomplete: {uncompleteTask()}</Typography>
                <Typography variant='h6'>Complete: {completeTodo()}</Typography>
            </Box>
            <Grid container spacing={2} mt={2} columns={2}>
                {todos.length === 1
                    ? todos.map((item) =>
                        <Box padding={1} bgcolor={!item.completed ? 'red' : 'lime'} width={'100%'} key={item.id} textAlign={'center'} borderRadius={1} >
                            <Typography sx={{ cursor: 'pointer' }}
                                onClick={() => handleComplete(item.id)} variant='body1'>
                                {item.text}
                            </Typography>
                            {item.completed && <Button sx={{ color: 'black' }} onClick={() => deleteTodo(item.id)} disableRipple disableFocusRipple>X</Button>}
                        </Box>)
                    :
                    todos.map((item) =>
                        <Grid size={1} key={item.id}>
                            <Box padding={1} bgcolor={!item.completed ? 'red' : 'lime'} textAlign={'center'} borderRadius={1} >
                                <Typography sx={{ cursor: 'pointer' }}
                                    onClick={() => handleComplete(item.id)} variant='body1'>
                                    {item.text}
                                </Typography>
                                {item.completed && <Button sx={{ color: 'black' }} onClick={() => deleteTodo(item.id)} disableRipple disableFocusRipple>X</Button>}
                            </Box>
                        </Grid>
                    )}
            </Grid>
            <Button variant='contained'
                color='secondary'
                sx={{ mt: 1 }}
                onClick={() => navigate('/')}>Back</Button>
        </Container>
    )
}