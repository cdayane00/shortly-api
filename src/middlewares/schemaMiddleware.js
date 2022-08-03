const schemaMiddleware = (schema) => {
    return (request, response, next) =>{
        const {error} = schema.validate(request.body, { abortEarly: false });
        if(error) {
            return response.status(422).json({
                message: "validation failed",
                error: error.details.map((error)=> error.message)
            });
        }
        next();
    }
};

export default schemaMiddleware;