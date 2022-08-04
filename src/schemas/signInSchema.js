import joi from 'joi';

const signInSchema = joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export default signInSchema;