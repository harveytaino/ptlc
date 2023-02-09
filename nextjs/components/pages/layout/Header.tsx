import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import NavBar from '@/components/pages/layout/NavBar';

const Header = ( () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" style={{backgroundColor: 'green'}}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        Icon
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Progressive Learning and Training Center
                    </Typography>
                    <NavBar />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
})

export default Header