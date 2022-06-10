import React, {useState} from 'react';
import { Typography, AppBar, Toolbar, Box, IconButton, MenuItem, Menu, Drawer } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function SideBar({menu, drawerWidth, menuItems}) {

    return(
        <Drawer
          PaperProps={{sx: {backgroundColor: '#303030', color: 'white', }}}	
          hidden={!menu}
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            }
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primaryTypographyProps={{fontSize: '20px'}} primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
    )
}