import React from 'react';
import { tsXLXS } from 'ts-xlsx-export'
import { Container, Button, Title } from './styles';


const fileName = "TesteExcel"


const data = [
    {
        cod: "1",
        name: "produto1",
        valor: "R$50,00"
    },
    {
        cod: "2",
        name: "produto2",
        valor: "R$100,00"
    },
]

export function Export() {
    return (
        <Container>
            <Title>Teste Export Excel</Title>
            <Button onClick={() => tsXLXS().exportAsExcelFile(data).saveAsExcelFile(fileName)}>Exportar</Button>
        </Container>
    )
}