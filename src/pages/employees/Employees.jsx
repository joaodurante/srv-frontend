import React, { useState, useEffect } from 'react';
import { Box, Button, CssBaseline, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import AppMenu from '../../common/Menu/AppMenu';
import CrudDialog from './CrudDialog';
import { apiCaller } from '../../services/api';

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [crudDialog, setCrudDialog] = useState(false);
    const [employeeToUpdate, setEmployeeToUpdate] = useState(null);
    const [operation, setOperation] = useState('update');

    useEffect(() => {
        const loadEmployees = () => {
            setEmployees(JSON.parse("[\r\n    {\r\n        \"id\": 1,\r\n        \"name\": \"Roger Guedes\",\r\n        \"cpf\": \"111.111.111-11\",\r\n        \"role\": \"Gar\u00E7om\",\r\n        \"beginHour\": \"08:00\",\r\n        \"endHour\": \"15:00\"\r\n    },{\r\n        \"id\": 2,\r\n        \"name\": \"Roger Guedes\",\r\n        \"cpf\": \"111.111.111-11\",\r\n        \"role\": \"Gar\u00E7om\",\r\n        \"beginHour\": \"08:00\",\r\n        \"endHour\": \"15:00\"\r\n    },{\r\n        \"id\": 3,\r\n        \"name\": \"Roger Guedes\",\r\n        \"cpf\": \"111.111.111-11\",\r\n        \"role\": \"Gar\u00E7om\",\r\n        \"beginHour\": \"08:00\",\r\n        \"endHour\": \"15:00\"\r\n    },{\r\n        \"id\": 4,\r\n        \"name\": \"Roger Guedes\",\r\n        \"cpf\": \"111.111.111-11\",\r\n        \"role\": \"Gar\u00E7om\",\r\n        \"beginHour\": \"08:00\",\r\n        \"endHour\": \"15:00\"\r\n    }\r\n]"))
        }

        loadEmployees()
    }, [employees]);

    const handleOpenFormDialog = (employee) => {
        setOperation('update');
        setCrudDialog(true);
        setEmployeeToUpdate(employee);
    }
    
    const handleCloseCrudDialog = () => {
        setCrudDialog(false);
    }

    const handleOpenRemovalDialog = (employee) => {
        setOperation('delete');
        setCrudDialog(true);
        setEmployeeToUpdate(employee);
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
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="left">CPF</TableCell>
                                    <TableCell align="left">Função</TableCell>
                                    <TableCell align="left">Entrada</TableCell>
                                    <TableCell align="left">Saída</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employees.map((employee) => (
                                    <TableRow key={employee.id}>
                                        <TableCell component="th" scope="employee">
                                            {employee.name}
                                        </TableCell>
                                        <TableCell align="left">{employee.cpf}</TableCell>
                                        <TableCell align="left">{employee.role}</TableCell>
                                        <TableCell align="left">{employee.beginHour}</TableCell>
                                        <TableCell align="left">{employee.endHour}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => handleOpenFormDialog(employee)}>Editar</Button>
                                            <Button onClick={() => handleOpenRemovalDialog(employee)}>Remover</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <CrudDialog employeeToUpdate={employeeToUpdate} open={crudDialog} operation={operation} handleClose={handleCloseCrudDialog}/>
        </Box>
    );
}