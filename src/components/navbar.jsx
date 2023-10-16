"use client";
import React, {useState} from 'react';
import SiteLogo from './sitelogo';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Button, Box, List, ListItem, ListItemText, Drawer, Divider} from '@mui/material';

export const navbarItems = ["About Me", "Projects", "Contact"];

function Navbar(props){

  const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const {window} = props;

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

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box>
        <AppBar className="navbarAppBar" color="transparent" enableColorOnDark="true">
            <Toolbar className="navbarToolbar">
                <SiteLogo />            
                <Box sx={{ marginLeft: "auto", display: { xs: 'none', sm : 'none', md:"block" } }}>
                    {navbarItems.map((item) => (
                    <Button key={item} className="navbarButton">
                        {item}
                    </Button>
                    ))}
                </Box>
                <Box sx={{ display: {md: "none", lg: "none", xl: "none"} }}>                  
                  <Button>
                    <MenuIcon />
                  </Button>
                </Box>
            </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {mobileDrawer}
          </Drawer>
        </nav>
      </Box>
    )
}

export default Navbar;