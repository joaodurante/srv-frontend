import React, {useState, useEffect} from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';

export default function CrudDialog({ open, operation, productToUpdate, handleClose }) {
    const [product, setProduct] = useState({
        id: null,
        name: '',
        description: '',
        value: null,
        imageUrl: ''
    });

    useEffect(() => {
        if(productToUpdate) {
            setProduct(productToUpdate)
        } else {
            setProduct({
                id: null,
                name: '',
                description: '',
                value: null,
                imageUrl: ''
            });
        }
    }, [open]);

    const onChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        if(operation === 'update') {
            console.log('update')
        } else {
            console.log('delete')
        }
        // const response = await api.get(`/v1/product/${product.id}`, {
        //     body: product,
        //     headers: {
        //         Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjE3NjQwM30.8NHheQNjddXkYvAWo1aqWoI6bp5mooz3aCY3blnVjKyRXlqfD3sVP1tSuMsTgvU2Jw0IGi9ob1LTlW6v9fpjFQ'
        //     }
        // });
    }


    return(
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
            <DialogTitle>Alteração de senha</DialogTitle>
            {
                operation === 'update' ? (
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Nome do produto"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="name"
                            value={product.name}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Descrição do produto"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="description"
                            value={product.description} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Valor do produto"
                            type="number"
                            fullWidth
                            variant="standard"
                            name="value"
                            value={product.value} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="URL da imagem do produto"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="imageUrl"
                            value={product.imageUrl} 
                            onChange={e => onChange(e)}
                        />
                    </DialogContent>
                )
                : (
                    <DialogContent>
                        <DialogContentText>
                            Tem certeza que deseja remover o produto?
                        </DialogContentText>
                    </DialogContent>
                )
            }
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={onSubmit}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    )
}