import { AppBar, Toolbar, Typography, Box, IconButton, Button,  } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = [
    {label: 'Home',
        road: '/multi-app'
    },
    {
        label: 'Todo App',
        road: '/multi-app/todo/'
    },
];




export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" mr={10}>
                        Majzer
                    </Typography>
                    {pages.map((page) =>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => navigate(page.road)}
                        >
                            {page.label}
                        </IconButton>)}

                    <Button color="inherit" sx={{ml:'auto'}}>About</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}