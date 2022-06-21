//JS HW_2
function check_proba(proba){
    if (typeof proba !== 'string' ){                    //скрипт на вход должен принимать строку
        console.log("is not a string")}
 else if((/^\s*$/).test(proba)){                        //строка не должна быть пустой
    console.log("Error!Empty string!")}
    else{
if (proba.length<5){                                    //должно быть мин 5 символов
    console.log("String too short! min 5")}
if (proba.length>64){                                   //должно быть максимум 64 символа
    console.log("String too long! Max 64")}
if (!/[a-zа-яёА-ЯЁA-Z]+/.test(proba))                   //проверка на наличие букв
     {console.log("Error! No letters in the string")}
if (!/^.*[A-ZА-ЯЁ]+.*$/.test(proba)){                   //проверка на наличие буквы в верхнем регистре
     console.log("There is no uppercase letter")
}
if (!/\d/.test(proba)){                                 //должна быть хотя бы одна цифра
     console.log("Error! No number")}
if (!/[@]/.test(proba)){                                //должен быть символ @
     console.log("Error! No @")}
}}
check_proba("j8kgb")
