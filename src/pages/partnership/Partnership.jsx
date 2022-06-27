import React, { useState, useEffect } from 'react';
import { Box, Button, CssBaseline, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import AppMenu from '../../common/Menu/AppMenu';
import CrudDialog from './CrudDialog';
import { apiCaller } from '../../services/api';

export default function Partnership() {
    const [partnerships, setPartnerships] = useState([]);
    const [crudDialog, setCrudDialog] = useState(false);
    const [partnershipToUpdate, setPartnershipToUpdate] = useState(null);
    const [operation, setOperation] = useState('update');
    
    useEffect(() => {
        const loadPartnerships = () => {
            setPartnerships(JSON.parse("[{\r\n    \"id\": 1,\r\n    \"name\": \"CI&T\",\r\n    \"cnpj\": \"11.111.111\/0001-11\",\r\n    \"discount\": 0.10,\r\n    \"validity\": \"2025-03-01T03:00:00Z\"\r\n},{\r\n    \"id\": 2,\r\n    \"name\": \"CI&T\",\r\n    \"cnpj\": \"11.111.111\/0001-11\",\r\n    \"discount\": 0.10,\r\n    \"validity\": \"2025-03-01T03:00:00Z\"\r\n},{\r\n    \"id\": 3,\r\n    \"name\": \"CI&T\",\r\n    \"cnpj\": \"11.111.111\/0001-11\",\r\n    \"discount\": 0.10,\r\n    \"validity\": \"2025-03-01T03:00:00Z\"\r\n},{\r\n    \"id\": 4,\r\n    \"name\": \"CI&T\",\r\n    \"cnpj\": \"11.111.111\/0001-11\",\r\n    \"discount\": 0.10,\r\n    \"validity\": \"2025-03-01T03:00:00Z\"\r\n}]"))
        }

        loadPartnerships()
    }, [partnerships]);

    const handleOpenFormDialog = (partnership) => {
        setOperation('update');
        setCrudDialog(true);
        setPartnershipToUpdate(partnership);
    }
    
    const handleCloseCrudDialog = () => {
        setCrudDialog(false);
    }

    const handleOpenRemovalDialog = (partnership) => {
        setOperation('delete');
        setCrudDialog(true);
        setPartnershipToUpdate(partnership);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppMenu menu={true} auth={true} />
            <CssBaseline />
            <Box sx={{
                flexGrow: 1,
                height: '100vh',
                backgroundColor: '#eeeeee',
                padding: '5rem'
            }}>
                <Button id="add-button" size="large" type="button" variant="contained" 
                    onClick={() => handleOpenRemovalDialog(null)}>Adicionar</Button>
                <Paper sx={{ width: '100%', mb: 2, marginTop: '2rem' }}>
                    <TableContainer >
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome da empresa</TableCell>
                                    <TableCell align="left">CNPJ</TableCell>
                                    <TableCell align="left">Desconto</TableCell>
                                    <TableCell align="left">Validade</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {partnerships.map((partnership) => (
                                    <TableRow key={partnership.id}>
                                        <TableCell component="th" scope="partnership">
                                            {partnership.name}
                                        </TableCell>
                                        <TableCell align="left">{partnership.cnpj}</TableCell>
                                        <TableCell align="left">{partnership.discount * 100}%</TableCell>
                                        <TableCell align="left">{new Date(partnership.validity).toLocaleDateString()}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => handleOpenFormDialog(partnership)}>Editar</Button>
                                            <Button onClick={() => handleOpenRemovalDialog(partnership)}>Remover</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <CrudDialog partnershipToUpdate={partnershipToUpdate} open={crudDialog} operation={operation} handleClose={handleCloseCrudDialog}/>
        </Box>
    );
}