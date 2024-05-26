const express = require('express')
const dao = require('../controllers/dao')
const router = express.Router()

router.use((req,res,next) => next())

router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.get('/cadastro', (req,res) => {
    res.render('cadastro.ejs', {error: req.query.error})
})

router.get('/login', (req,res) => {
    res.render('login.ejs', {error: req.query.error})
})


router.post('/cadastro', (req,res) => {
    const {nome,cpf,cnpj,senha,email} = req.body

    dao.addUser({nome,cpf,cnpj,senha,email}, (error) => {
        if(error){
            console.log("Erro:   ",error)
            res.redirect('/cadastro?error=error')
            return
        }
        res.redirect('/login')
    })
})


router.post('/login', (req, res) => {
    const { nome, senha } = req.body;

    dao.getUserByLoginPass(nome, senha, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.');
        }
        if (results.length > 0) {
            return res.render('usuarioLogado.ejs', {nomeUsuario: nome})
        } else {
            return res.status(401).send('Credenciais inválidas. Por favor, verifique seu login e senha.');
        }
    });
});

module.exports = router




