import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import TopBar from './TopBar';
import SideBar from './SideBar';
import './AppMenu.css';

export default function AppMenu({menu, auth}) {
    const drawerWidth = '240px';
    const menuItems = [
      {label: 'Dashboard', icon: 'icon-name'},
      {label: 'Produtos', icon: 'icon-name'},
      {label: 'Funcionários', icon: 'icon-name'},
      {label: 'Convênios', icon: 'icon-name'},
      {label: 'Vendas', icon: 'icon-name'},
    ];
  
    return (
      <Box>
        <TopBar menu={menu} auth={auth} drawerWidth={drawerWidth} />
        <SideBar menu={menu} menuItems={menuItems} drawerWidth={drawerWidth} />
      </Box>
    );
  
}