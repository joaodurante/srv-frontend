import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function ChangePasswordDialog({ open, handleClose }) {
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = React.useState('');
    const [error, setError] = React.useState('');

    const handleChangePassword = (event) => {
        console.log(oldPassword, newPassword, newPasswordConfirm);
        // chama a api para alterar a senha
        handleClose();
    }

    const validateForm = () => {
        if(oldPassword !== '' && newPassword !== '' && newPasswordConfirm !== '') {
            if(newPassword === newPasswordConfirm) {
                return true;
            }
        }
        
        return false;
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
                <DialogTitle>Alteração de senha</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Senha atual"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        error={error !== ''}
                        helperText={error}
                    />
                    <TextField
                        margin="dense"
                        label="Nova senha"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={newPassword} 
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Confirmação da nova senha"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={newPasswordConfirm}
                        onChange={e => setNewPasswordConfirm(e.target.value)}
                        error={newPassword !== newPasswordConfirm}
                        helperText={newPassword !== newPasswordConfirm ? 'As senhas não conferem' : ''}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleChangePassword} disabled={!validateForm()}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}