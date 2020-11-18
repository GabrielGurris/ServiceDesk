const Joi = require('@hapi/joi');
const { getValidatorError } = require('../helpers/validator');

const rules = {
    name,
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{3,30}$')).required(), //validaçao //DE A a Z maiusculo ou minusculo, pode ser só letras ou numero e tamanho de 3 a 30
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),//confirmando se a senha é igual
    address: , 
    naddress: , 
    neighborhood: , 
    cep: , 
    phone1: , 
    phone2: 
}

const options = { abortEarly: false };

const accountSignUp = (req, res, next) => {
    const { email, password, password_confirmation } = req.body;

    const schema = Joi.object({
        email: rules.email,
        password: rules.password,
        password_confirmation: rules.password_confirmation
    });

    const { error } = schema.validate({ email, password, password_confirmation }, options); //validando a senha, se encontrar um dado incorreto ele ja para e retorna erro

    if (error) {
        const messages = getValidatorError(error, 'account.signup');
        return res.jsonBadRequest(null, null, { error: messages }) //dados, mensagem, metadados 
    }

    next();
}

module.exports = { accountSignUp };