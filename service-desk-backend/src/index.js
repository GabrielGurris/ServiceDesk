const express = require('express');
const db = require('./models');
const response = require('./middlewares/response');

const authController = require('./controllers/auth');
const accountController = require('./controllers/account');

const app = express();

app.use(response); //middleware Global

app.use(express.json()); //receber os dados em JSON 
app.use(express.urlencoded({ extended: false })); //pegar o body da requisição

app.use('/auth', authController);
/*  criando o acesso de authController atraves de 
    /auth/sign-in
    /auth/sign-up
 */
app.use('/myAccount', accountController);
/* criando rotas para ver os dados e edição de conta
*/

app.get('/', (req, res) => {
    return res.json('Api running....');
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });
})      //primeiro inicializa o sequelize e depois o servidor