import React, {useState, useEffect} from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import {apiCaller, apiAlert} from '../../services/api';


export default function CrudDialog({ open, operation, employeeToUpdate, handleClose }) {
    const [employee, setEmployee] = useState({
        id: null,
        name: '',
        cpf: '',
        role: '',
        beginHour: '',
        endHour: ''
    });

    useEffect(() => {
        if(employeeToUpdate) {
            setEmployee(employeeToUpdate)
        } else {
            setEmployee({
                id: null,
                name: '',
                cpf: '',
                role: '',
                beginHour: '',
                endHour: ''
            });
        }
    }, [open]);

    const onChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        let response;
        if(operation === 'update') {
            response = await apiCaller({method: 'UPDATE', url: `/v1/employee/${employee.id}`, data: employee});
        } else {
            response = await apiCaller({method: 'DELETE', url: `/v1/employee/${employee.id}`});
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
                            value={employee.name}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="CPF"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="cpf"
                            value={employee.cpf} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Cargo"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="role"
                            value={employee.role} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Horário de entrada"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="imageUrl"
                            value={employee.beginHour} 
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            margin="dense"
                            label="Horário de saída"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="endHour"
                            value={employee.endHour} 
                            onChange={e => onChange(e)}
                        />
                    </DialogContent>
                )
                : (
                    <DialogContent>
                        <DialogContentText>
                            Tem certeza que deseja remover o funcionário?
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