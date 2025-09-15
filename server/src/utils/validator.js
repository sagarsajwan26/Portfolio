import Joi from 'joi'
export const registerUserValidator= (data)=>{
const schema= Joi.object({
    
        firstName:Joi.string().required() ,
        lastName:Joi.string().optional(),
    
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    username:Joi.string().required()
})
return schema.validate(data)

}


export const loginUserValidator= (data)=>{
    const schema= Joi.object({
        username:Joi.string().required(),
        password:Joi.string().required()
    })
    return schema.validate(data)
}

