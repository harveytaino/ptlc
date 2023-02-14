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
                    <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1
                            }}
                    >
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }}}>
                            <img src="ptlc_logo.png" alt="logo" style={{height: 50, width: 50}}/>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }}}>
                            <img src="ptlc_logo.png" alt="logo" style={{height: 30, width: 30}}/>
                        </Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block', color:'green' }, fontSize: 30 }}
                        >
                            PTLC
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