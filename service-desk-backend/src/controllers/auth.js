const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign in.');
});

router.get('/sign-up', async (req, res) => {
    const name = 'gabriel';
    const email = 'gabriel_gurris@outlook.com';
    const address = 'street one';
    const naddress = '25';
    const neighborhood = 'wash';
    const cep = '154-55663';
    const phone1 = '4444-5559';
    const phone2 = '11224-5355';
    const password = '123456';

    const hash = bcrypt.hashSync(password, saltRounds);
    const result = await Account.create({ name, email, address, naddress, neighborhood, cep, phone1, phone2, password: hash });

    return res.json(result);
});

module.exports = router;