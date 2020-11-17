const express = require('express');
const app = express();
const db = require('./models');

const authController = require('./controllers/auth');

app.use(express.json()); //receber os dados em JSON 
app.use(express.urlencoded({ extended: false })); //pegar o body da requisição

app.use('/auth', authController);
/*  criando o acesso de authController atraves de 
    /auth/sign-in
    /auth/sign-up
 */

app.get('/', (req, res) => {
    return res.json('Api running....');
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });
})      //primeiro inicializa o sequelize e depois o servidor