import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import NavBar from '@/components/pages/layout/NavBar';

const Header = ( () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" style={{backgroundColor: 'white'}}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        Icon
                    </IconButton>
                    <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1
                            }}
                    >
                        <img src="ptlc_logo.png" alt="logo" style={{height: 50, width: 50}}/>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color:'green' }, fontSize: 30 }}
                        >
                            Progressive Learning and Training Center
                        </Typography>
                    </Box>
                    <Box>
                        <NavBar />
                    </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
})

export default Header