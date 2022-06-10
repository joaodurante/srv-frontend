import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import TopBar from './TopBar';
import SideBar from './SideBar';
import './AppMenu.css';

export default function AppMenu({menu, auth}) {
    const drawerWidth = 240;
  
    return (
      <Box>
        <TopBar menu={menu} auth={auth} drawerWidth={drawerWidth} />
        <SideBar menu={menu} drawerWidth={drawerWidth} />
      </Box>
    );
  
}