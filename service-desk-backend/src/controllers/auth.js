const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp } = require('../validator/account');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign in.');
});

router.get('/sign-up', accountSignUp /*um middleware apenas para essa rota*/, async (req, res) => {
    const { name, email, address, naddress, neighborhood, cep, phone1, phone2, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if (account) return res.jsonBadRequest(null, 'Account already exists');

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({ name, email, address, naddress, neighborhood, cep, phone1, phone2, password: hash });

    return res.jsonOK(newAccount, 'Account created');
});

module.exports = router;