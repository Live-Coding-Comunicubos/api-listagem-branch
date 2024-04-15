
const express = require('express')
const app = express()

const lista = [
    {
        id: '1',
        nome: 'amanda',
    },
    {
        id: '2',
        nome: 'patrick',
    },
    {
        id: '3',
        nome: 'ygor',
    },
]

app.post("/lista", (req, res)=> {
    lista.push({
        id: (lista.length) + 2,
        nome: 'Novo Usuario'
    })
    return res.status(201).json({ texto:"novo usuario adicionado"})
})


app.delete("/lista/:id", (req, res)=> {
    const indexUsuario = lista.findIndex((usuario) => usuario.id === id);
    lista.splice(indexUsuario, 1);
    return res.status(200).json({ texto:"usuario excluido"})
})

app.listen(3000, ()=>{ 
    console.log('servidor rodando na porta 3000')
})
