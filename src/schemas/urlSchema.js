import joi from 'joi';

const urlSchema = joi.object().keys({
    url: joi.string().uri().required()
});

export default urlSchema;