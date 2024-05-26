const express = require('express')
const conexao = require('./controllers/conn')
const session = require('express-session')
const rotaCalculos = require('./routes/calculos')

const app = express()
const port = 6065

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

//Teste para sessao
app.use(session({
    secret: 'raris-key',
    resave:false,
    saveUninitialized:false
}))

const index = require('./routes/index')
const user = require('./routes/user')


app.use('/', index)
app.use('/user',user)
app.use('/calculos', rotaCalculos) //Nao sei como prosseguir com a rota de calculos (Vindos da calculadra)


app.use(express.static('public'))

app.listen(port, () => console.log(`Server rodando em http://localhost::${port}`))