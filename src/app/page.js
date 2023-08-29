import React from 'react';
import { Menu, Box, List, ListItem, ListItemText, Drawer} from '@mui/material';
import Navbar from '@/components/navbar';
import { navbarItems } from '@/components/navbar';

export default function Home() {

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
    <main className="flex min-h-screen flex-col justify-between p-24">
    <Navbar />
      
    </main>
  )
}
