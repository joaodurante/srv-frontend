import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faHome, faBars, faIdBadge, faPercent, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import './SideBar.css';


export default function SideBar({ menu, drawerWidth }) {
  const menuItems = [
    { label: 'DASHBOARD', icon: faHome, uri: '/home' },
    { label: 'PRODUTOS', icon: faStore, uri: '/products' },
    { label: 'FUNCIONÁRIOS', icon: faIdBadge, uri: '/employees' },
    { label: 'CONVÊNIOS', icon: faPercent, uri: '/partnerships' },
    { label: 'VENDAS', icon: faMoneyCheckDollar, uri: '/sales' },
  ];

  return (
    <Drawer
      PaperProps={{ sx: { backgroundColor: '#303030', color: 'white', } }}
      hidden={!menu}
      variant="permanent"
      anchor="left"
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: `${drawerWidth}px`,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          backgroundColor: '#282828',
          paddingLeft: '2rem',
        }}
      >
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link to={item.uri} className="link">
              <ListItemButton sx={{ padding: '1rem' }}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={item.icon} size="lg" color="white" />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}