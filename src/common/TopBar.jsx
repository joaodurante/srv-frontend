import React, {useState} from 'react';
import { Typography, AppBar, Toolbar, Box, IconButton, MenuItem, Menu, Drawer } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';


export default function TopBar({menu, auth, drawerWidth}) {
    const handleLogout = () => {
        console.log('logoout');
    }

    return(
        <AppBar position="absolute" sx={{
            backgroundColor: '#282828', 
            marginBottom: '4rem', 
            width: `calc(100% - ${drawerWidth}px)`, 
            ml: `${drawerWidth}px`
        }}>
          <Toolbar>
            { menu && (<IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {/* <MenuIcon /> */}
              </IconButton>)
            }
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                  {/* <AccountCircle /> */}
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