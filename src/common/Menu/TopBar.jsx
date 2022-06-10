import React, {useState} from 'react';
import { Typography, AppBar, Toolbar, Box, IconButton, MenuItem, Menu, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto/300.css';


export default function TopBar({menu, auth, drawerWidth}) {
    const handleLogout = () => {
        console.log('logoout');
    }

    return(
        <AppBar position="absolute" sx={{
            backgroundColor: '#282828', 
            marginBottom: '4rem', 
            width: `calc(100% - ${drawerWidth}px)`, 
            ml: `${drawerWidth}px`,
        }}>
          <Toolbar>
            { menu && (<FontAwesomeIcon icon={faKitchenSet} size="2xl" color="white"/>) }
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: '1rem' }}>
              SRV
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleChangePassword}>Trocar senha</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
    )
}