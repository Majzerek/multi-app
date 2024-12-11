import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export const Main = () => {
  const navigate = useNavigate()
  return (<>

    <Container maxWidth='md' sx={{ height: '100vh' }}>
    
        <Typography variant='h1'
          color={'secondary'}>Welcome</Typography>
      <Box display={'flex'} gap={2}>
        <Button variant='nav'
          onClick={() => navigate('/multi-app/todo/')}>
          <Typography variant='body1'>Go to TodoList</Typography>
        </Button>
      </Box>

    </Container>
  </>
  )
}
