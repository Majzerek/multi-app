import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export const Main = () => {
  const navigate = useNavigate()
  return (<>

    <Container maxWidth='md' sx={{ height: '100vh', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(33,105,189,1) 100%)' }} >
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
