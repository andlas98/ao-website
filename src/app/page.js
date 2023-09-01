import React from 'react';
import { Menu, Box, List, ListItem, ListItemText, Drawer} from '@mui/material';
import Navbar from '@/components/navbar';
import { navbarItems } from '@/components/navbar';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Navbar />
    </main>
  )
}
