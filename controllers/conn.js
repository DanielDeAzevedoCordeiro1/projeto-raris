
const mysql = require('mysql2')


/*
Usei um banco de testes chamado raris

create database raris

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


*/

const conexao = mysql.createConnection({
    host:'127.0.0.1',
    database:'raris',
    password:'root',
    user:'root'
})

conexao.connect((error) => {
    if(error){
        console.log("Houve um erro: ",error)
        return
    }
    console.log("Conexao estabelecida com o banco de dados!")
})

module.exports = conexao