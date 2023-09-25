
export const validateUrl=(value)=>{
    const reg_exUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/ ;
    const reg_exImg = /.*(png|jpg|jpeg|gif)$/ ;

        if(!reg_exUrl.test(value)){
            return "Por favor insertar un URL válido";
        }
        else if(!reg_exImg.test(value)){
            return "La URL no corresponde a una imagen";
        }
        else{
            return "";
        }
};

export const validateName= (value)=>{
    if(value.length>30){
        return "Nombre demasiado largo";
    }
    else{
        return "";
    }
};

export const validateDate= (value)=>{
    const reg_date= /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/ ;

        if(!reg_date.test(value)){
            return "Error en el formato de la fecha"
        }
        else{
            return ""
        }
};

export const validateRating=(value)=>{
    const val= parseFloat(value);
        
        if(isNaN(val)){
            return "Por favor inserte un numero"
        }
        else{
            if(val>10){
                return "El rating no puede ser mayor a 10"
            }
            else if(val<0){
                return "El rating no puede ser menor a 0"
            }
            else{
                return ""
            }
        }
};

export const validateDescription=(value)=>{
    if(value.length<10){
        return "La descripción ingresada es muy corta"
    }
    else if(value.length>1000){
        return "La descripción ingresada es muy larga"
    }
    else{
        return ""
    }
};



