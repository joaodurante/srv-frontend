import React, {useState} from 'react';
import { Box, CssBaseline, TextField, Grid, List, ListItem, ListItemText, Button } from '@mui/material';
import AppMenu from '../../common/Menu/AppMenu';
import {apiCaller} from '../../services/api';

export default function Sales() {
    const [sale, setSale] = useState({
        cpf: '',
        partnershipId: null,
        employeeId: null,
        products: JSON.parse("[\r\n        {\r\n            \"id\": 1,\r\n            \"name\": \"iPhone 12\",\r\n            \"description\": \"Apple iPhone 12\",\r\n            \"value\": 5000.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 2,\r\n            \"name\": \"iPhone 13\",\r\n            \"description\": \"Apple iPhone 13\",\r\n            \"value\": 8500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 3,\r\n            \"name\": \"iPhone 14\",\r\n            \"description\": \"Apple iPhone 14\",\r\n            \"value\": 9500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 4,\r\n            \"name\": \"iPhone 15\",\r\n            \"description\": \"Apple iPhone 15\",\r\n            \"value\": 10500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 5,\r\n            \"name\": \"iPhone 16\",\r\n            \"description\": \"Apple iPhone 16\",\r\n            \"value\": 11500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 6,\r\n            \"name\": \"iPhone 17\",\r\n            \"description\": \"Apple iPhone 17\",\r\n            \"value\": 12500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        }\r\n    ]")
    });

    const [values, setValues] = useState({
        totalValue: 0,
        discounts: 0,
        finalValue: 0
    });

    const onChange = (e) => {
        setSale({...sale, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        // const response = await apiCaller.get('/v1/sale');
        console.log('submit');
    }

    return(
        <Box sx={{ display: 'flex' }}>
            <AppMenu menu={true} auth={true} />
            <CssBaseline />
            <Box sx={{ 
                flexGrow: 1, 
                height: '100vh', 
                backgroundColor: '#eeeeee',
                padding: '5rem'
            }}>
                <form onSubmit={onSubmit}>
                    <Grid container>
                        <Grid item xs={6} sx={{padding: '2rem'}}>
                            <TextField id="outlined-basic" label="CPF do cliente" variant="outlined" fullWidth
                                    value={sale.cpf} onChange={e => onchange(e)} margin="normal" />
                            
                            <TextField id="outlined-basic" label="Convênio" variant="outlined" fullWidth
                                    value={sale.partnershipId} onChange={e => onchange(e)} margin="normal" />

                            <TextField id="outlined-basic" label="Funcionário" variant="outlined" fullWidth
                                    value={sale.employeeId} onChange={e => onchange(e)} margin="normal" />
                        </Grid>
                        <Grid item xs={6} sx={{padding: '2rem'}}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <TextField id="outlined-basic" label="Produtos" variant="outlined" fullWidth
                                        onChange={e => onchange(e)} margin="normal"/>
                                <Button size="medium" type="button" variant="contained" 
                                        style={{marginTop: '1rem', marginBottom: '0.5rem', marginLeft: '0.5rem'}}>
                                    Adicionar
                                </Button>
                            </div>
                            
                            
                            <List sx={{backgroundColor: '#dedede', borderRadius: '0.3rem', border: '0.1rem solid #b7b7b7'}}>
                                {sale.products.map(product => (
                                    <ListItem>
                                    <ListItemText
                                        primary={product.name}
                                    />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>

                    <Grid container sx={{padding: '2rem'}}>
                        <TextField id="outlined-basic" label="Valor Total" variant="outlined" disabled fullWidth
                                value={values.products} margin="normal"/>

                        <TextField id="outlined-basic" label="Desconto" variant="outlined" disabled fullWidth
                                value={values.products} margin="normal"/>

                        <TextField id="outlined-basic" label="Valor Final" variant="outlined" disabled fullWidth
                                value={values.products} margin="normal"/>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
}