import React, {useState, useEffect} from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import {apiCaller, apiAlert} from '../../services/api';


export default function CrudDialog({ open, operation, partnershipToUpdate, handleClose }) {
    const [partnership, setPartnership] = useState({
        id: null,
        name: '',
        cnpj: '',
        discount: '',
        validity: '',
    });

    useEffect(() => {
        if(partnershipToUpdate) {
            setPartnership(partnershipToUpdate)
        } else {
            setPartnership({
                id: null,
                name: '',
                cnpj: '',
                discount: '',
                validity: '',
            });
        }
    }, [open]);

    const onChange = (e) => {
        setPartnership({...partnership, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        let response;
        if(operation === 'update') {
            if(!partnership.validity.includes('T')) {
                partnership.validity = partnership.validity + 'T00:00:00Z';
            }

            response = await apiCaller({method: 'UPDATE', url: `/v1/partnership/${partnership.id}`, data: partnership});
        } else {
            response = await apiCaller({method: 'DELETE', url: `/v1/partnership/${partnership.id}`});
        }

        apiAlert(response);
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
                            label="Nome"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="name"
                            value={partnership.name}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="CNPJ"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="cnpj"
                            value={partnership.cnpj} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Desconto"
                            type="number"
                            fullWidth
                            variant="standard"
                            name="discount"
                            value={partnership.discount} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Horário de entrada"
                            type="date"
                            fullWidth
                            variant="standard"
                            name="validity"
                            value={partnership.validity ? partnership.validity.split('T')[0] : ''} 
                            onChange={e => onChange(e)}
                        />
                    </DialogContent>
                )
                : (
                    <DialogContent>
                        <DialogContentText>
                            Tem certeza que deseja remover o convênio?
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