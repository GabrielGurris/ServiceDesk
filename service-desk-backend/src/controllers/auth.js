const express = require('express');
const router = express.Router();
const { Account } = require('../models')

router.get('/sign-in', (req, res) => {
    return res.json('Sign in.');
});

router.get('/sign-up', async (req, res) => {
    const result = await Account.create({name: 'gabriel', 
                                        email: 'gabriel_gurris@outlook.com', 
                                        address:'street one', 
                                        naddress: '25', 
                                        neighborhood: 'wash', 
                                        cep:'154-55663', 
                                        phone1:'4444-5559', 
                                        phone2:'11224-5355', 
                                        password: '123456'});

    console.log(result);                                   
});

module.exports = router;