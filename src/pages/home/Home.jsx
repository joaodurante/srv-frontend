import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppMenu from '../../common/Menu/AppMenu';
import './Home.css';

export default function Home() {
    return(
        <Box sx={{ display: 'flex' }}>
        <AppMenu menu={true} auth={true} />
        <CssBaseline />
        <Box sx={{ 
            flexGrow: 1, 
            height: '100vh', 
            overflow: 'auto', 
            'background-color': '#eeeeee',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        }}>
            <div>
                <h1>Bem Vindo!</h1>
            </div>
        </Box>
    </Box>
    )
}