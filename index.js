const express = require('express')
const app =  express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.post('/users/cadastrar', (req, res) => {
    res.sendFile(`${caminho}/cadastro.html`)
})

app.post('/users/save', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    console.log(`
        Usuário: ${nome}
        Idade: ${idade}
    `)

    res.redirect('/')
})


app.listen(5000)