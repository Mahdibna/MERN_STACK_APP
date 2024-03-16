const isEmpty=require('./isEmpty');
const validator=require('validator');
 module.exports=function validateRegister(data){
    let errors={};
    data.name=isEmpty(data.name) ? "":data.name
    data.email=isEmpty(data.email) ? "":data.email
    data.password=isEmpty(data.password) ? "":data.password
    data.confirm=isEmpty(data.confirm) ? "":data.confirm

    if(validator.isEmpty(data.name)){
        errors.name='required name'
    }
    if(validator.isEmpty(data.password)){
        errors.password='required password'
    }
    if(validator.isEmpty(data.email)){
        errors.email='required email'
    }else if(!validator.isEmail(data.email)){
        errors.email='required format email'
    }
    if(validator.isEmpty(data.confirm)){
        errors.confirm='required confirm'
    }else if(!validator.equals(data.confirm,data.password) && (!validator.isEmpty(data.password))){
        errors.confirm='confirm and password must be match'
    }
 return {
    errors,
    isvalid:isEmpty(errors)
 }
 }  