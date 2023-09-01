import React from 'react';
import SiteLogo from './sitelogo';
import { AppBar, Toolbar, Button, Box, List, ListItem, ListItemText, Drawer} from '@mui/material';

export const navbarItems = ["About Me", "Projects", "Contact"];

function Navbar(props){
    const mobileDrawer = (
        <Box>
          <List>
            {navbarItems.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
    );

    return (
        <AppBar className="navbarAppBar" color="transparent" enableColorOnDark="true">
            <Toolbar className="navbarToolbar">
                <SiteLogo />            
                <Box sx={{ marginLeft: "auto", display: { xs: 'none', sm: 'block' } }}>
                    {navbarItems.map((item) => (
                    <Button key={item} className="navbarButton">
                        {item}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;