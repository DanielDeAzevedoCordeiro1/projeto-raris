const express = require('express');
const router = express.Router();
const conexao = require('../controllers/conn');

router.get('/calculos', (req,res) => {
    res.render('calculadoraMei.ejs', {error:req.query.error})
})

router.post('/', (req, res) => {

    const { faturamentoMensal, tipoAtividade } = req.body;

    const query = 'INSERT INTO calculadora_mei (faturamento_mensal, tipo_atividade) VALUES (?, ?)';
    const values = [faturamentoMensal, tipoAtividade];

    conexao.query(query, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao salvar os dados da calculadora:', error);
            return res.status(500).json({ error: 'Erro ao salvar os dados da calculadora' });
        }

     
        console.log('Dados da calculadora salvos:', results);
        return res.status(200).json({ success: true });
    });
});

module.exports = router;