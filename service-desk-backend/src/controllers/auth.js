const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign in.');
});

router.get('/sign-up', async (req, res) => {
    const { name, email, address, naddress, neighborhood, cep, phone1, phone2, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if (account) return res.json('Accoun already exists');

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({ name, email, address, naddress, neighborhood, cep, phone1, phone2, password: hash });

    return res.json(newAccount);
});

module.exports = router;