import express from 'express'

const router = express.Router()

const clientes = [
    {
        id: '1',
        nome: 'Ricardo'
    },
    {
        id: '2',
        nome: 'Marianna'
    },
    {
        id: '3',
        nome: 'Manuela'
    }
]

router.get('/', (req, res) => {
    const { id } = req.query
    if (!id) {
        return res.send(clientes)
    }
    const cliente = clientes.find(x => x.id === id)
    res.send(cliente)
})

router.post('/', (req, res) => {
    clientes.push(req.body)
    return res.send(clientes)
})

export default router