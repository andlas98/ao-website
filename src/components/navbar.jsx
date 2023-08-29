import React from 'react';
import SiteLogo from './sitelogo';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

export const navbarItems = ["About", "Projects", "Contact"];

function Navbar(props){
    return (
        <AppBar>
            <Toolbar>
                <SiteLogo />            
                <Box sx={{ marginLeft:"auto",display: { xs: 'none', sm: 'block' } }}>
                    {navbarItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                        {item}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;