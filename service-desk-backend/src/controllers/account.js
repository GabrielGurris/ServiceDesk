const express = require('express');
const { Account } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const { accounts } = await Account.findAll(); 

    return res.jsonOK(accounts);
});

router.get('/:id', async (req, res) => {
    const { accountId } = req.params;
    const account = await Link.findAll({ where: { accountId } });

    return res.jsonOK(account);
});

router.put('/:id', async (req, res) => {
    const { accountId } = req.params;
    const account = await Link.findAll({ where: { accountId } });

    

    return res.jsonOK(account);
});
