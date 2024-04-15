
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

app.get('/lista/:id', async (req, res) => {
    return res.status(200).json({
        lista: lista.filter((usuario) => usuario.id === req.params.id)
    })
})


app.listen(3000, ()=>{ 
    console.log('servidor rodando na porta 3000')
})
