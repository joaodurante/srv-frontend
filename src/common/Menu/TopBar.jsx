import React, { useState } from 'react';
import { Typography, AppBar, Toolbar, Box, IconButton, MenuItem, Menu } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ChangePasswordDialog from './ChangePasswordDialog'; 
import '@fontsource/roboto/300.css';


export default function TopBar({ menu, auth, drawerWidth }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [changePasswordDialog, setChangePasswordDialog] = useState(false);
  const history = useNavigate();

  const handleLogout = () => {
    console.log('logoout');
    history('/');
  }

  const handleChangePassword = () => {
    console.log('change password');
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleOpenChangePasswordDialog = () => {
    setChangePasswordDialog(true);
  }

  const handleCloseChangePasswordDialog = () => {
    setChangePasswordDialog(false);
  }

  return (
    <AppBar position="absolute" sx={{
      backgroundColor: '#282828',
      marginBottom: '4rem',
      width: `calc(100% - ${menu ? drawerWidth : 0}px)`,
      ml: `${menu ? drawerWidth : 0}px`,
    }}>
      <Toolbar>
        <FontAwesomeIcon icon={faKitchenSet} size="2xl" color="white" />
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
              open={Boolean(anchorEl)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenChangePasswordDialog}>Trocar senha</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
      <ChangePasswordDialog open={changePasswordDialog} handleClose={handleCloseChangePasswordDialog} />
    </AppBar>
  )
}