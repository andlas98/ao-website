"use client";
import React from 'react';
import SiteLogo from './sitelogo';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Button, Box, List, ListItem, ListItemText, Drawer, Divider, Link } from '@mui/material';

export const navbarItems = {"About Me": "about-section", "Portfolio": "portfolio-section"}

function Navbar(props){

  const drawerWidth = 240;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const {window} = props;

  const mobileDrawer = (
      <Box 
      sx={{
        backgroundColor: "black !important",
      }}>
        <List>
          {Object.keys(navbarItems).map((item) => (
            <Box key={item}>
              <Link href={"#" + navbarItems[item]} underline="none" onClick={handleDrawerToggle}>
                <ListItem key={item}>
                  <ListItemText sx={{color: "white"}} primary={item}></ListItemText>
                </ListItem>
              </Link>
              <Divider></Divider>
            </Box>
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
                  {Object.keys(navbarItems).map((item) => (
                    <Link key={item} href={"#" + navbarItems[item]} underline="none">
                      <Button key={item} className="navbarButton">
                          {item}
                      </Button>
                    </Link>
                  ))}
              </Box>
              <Box sx={{ display: {md: "none", lg: "none", xl: "none"} }}>                  
                <Button onClick={handleDrawerToggle}>
                  <MenuIcon className='text-white'/>
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
            display: { xs: 'block', sm: 'block', md:"none"},
            '& .MuiDrawer-paper': { backgroundColor: "black", boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {mobileDrawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default Navbar;