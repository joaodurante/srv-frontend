import React, {useState, useEffect} from 'react';
import { Box, CssBaseline, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import AppMenu from '../../common/Menu/AppMenu';
import CrudDialog from './CrudDialog';
import api from '../../services/api';
import { SwipeTwoTone } from '@mui/icons-material';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [crudDialog, setCrudDialog] = useState(false);
    const [productToUpdate, setProductToUpdate] = useState(null);
    const [operation, setOperation] = useState('update');

    useEffect(() => {
        const loadProducts = async () => {
            // const response = await api.post('/v1/product', {
            //     headers: {
            //         Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjE3NjQwM30.8NHheQNjddXkYvAWo1aqWoI6bp5mooz3aCY3blnVjKyRXlqfD3sVP1tSuMsTgvU2Jw0IGi9ob1LTlW6v9fpjFQ'
            //     }
            // });
    
            setProducts(JSON.parse("[\r\n        {\r\n            \"id\": 1,\r\n            \"name\": \"iPhone 12\",\r\n            \"description\": \"Apple iPhone 12\",\r\n            \"value\": 5000.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 2,\r\n            \"name\": \"iPhone 13\",\r\n            \"description\": \"Apple iPhone 13\",\r\n            \"value\": 8500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 3,\r\n            \"name\": \"iPhone 14\",\r\n            \"description\": \"Apple iPhone 14\",\r\n            \"value\": 9500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 4,\r\n            \"name\": \"iPhone 15\",\r\n            \"description\": \"Apple iPhone 15\",\r\n            \"value\": 10500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 5,\r\n            \"name\": \"iPhone 16\",\r\n            \"description\": \"Apple iPhone 16\",\r\n            \"value\": 11500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        },\r\n        {\r\n            \"id\": 6,\r\n            \"name\": \"iPhone 17\",\r\n            \"description\": \"Apple iPhone 17\",\r\n            \"value\": 12500.00,\r\n            \"imageUrl\": \"https:\/\/cf.shopee.com.br\/file\/6570092a2c7b8f8c635858e6abbb1cc4\"\r\n        }\r\n    ]"));
        }
        loadProducts();
    }, [products]);

    const handleOpenFormDialog = (product) => {
        setOperation('update');
        setCrudDialog(true);
        setProductToUpdate(product);
    }
    
    const handleCloseCrudDialog = () => {
        setCrudDialog(false);
    }

    const handleOpenRemovalDialog = (product) => {
        setOperation('delete');
        setCrudDialog(true);
        setProductToUpdate(product);
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
                <Button id="add-button" size="large" type="button" variant="contained" onClick={() => handleOpenFormDialog(null)}>Adicionar</Button>
                <Grid container spacing={1}>
                    {products.map(product => {
                        return(
                            <Grid item xs={3} >
                                <Card sx={{ maxWidth: 345, 'margin-top': '1rem' }}>
                                    <CardMedia component="img" alt={product.name} height="200" image={product.imageUrl} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography variant="body3" color="text.tertiary" sx={{display: 'flex', justifyContent: 'flex-end', marginRight: '0.5rem'}}>
                                            R${product.value}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => handleOpenFormDialog(product)}>Editar</Button>
                                        <Button size="small" onClick={() => handleOpenRemovalDialog(product)}>Remover</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <CrudDialog productToUpdate={productToUpdate} open={crudDialog} operation={operation} handleClose={handleCloseCrudDialog}/>
        </Box>
    )
}