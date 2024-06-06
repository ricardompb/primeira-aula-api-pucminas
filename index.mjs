import express from 'express'
import clienteController from './src/cliente/cliente.controller.mjs'

const app = express()

app.use(express.json())

app.use('/cliente', clienteController)

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})