import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Box } from '@mui/material';
import AppMenu from '../../common/Menu/AppMenu';
import {apiCaller, apiAlert} from '../../services/api';
import './Login.css';

export default function Login(){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        // const response = await apiCaller({method: 'POST', url: '/v1/login', data: {username, password}});
        // if(response.status === 200) {
        //     console.log(response)
        //     localStorage.setItem('token', response.headers.Authorization);
        // } else {
        //     return false;
        // }
        history('/home');
    }

    return(
        <Box sx={{ display: 'flex' }}>
            <AppMenu menu={false} auth={false} />
            <Box sx={{ 
                    flexGrow: 1, 
                    height: '100vh', 
                    overflow: 'auto', 
                    'background-color': '#eeeeee',
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center'
                }}>
                <div className="login-container">
                    <div className='form-group'>
                        <Typography variant="h4">BEM VINDO</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField id="outlined-basic" label="User" variant="outlined"
                                value={username} onChange={e => setUsername(e.target.value)} margin="normal"/>

                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password"
                                value={password} onChange={e => setPassword(e.target.value)} margin="normal"/>
                            <Button id="login-button" size="large" type="submit" variant="contained">Login</Button>
                        </form>
                    </div>
                </div>
            </Box>
        </Box>
    )
}