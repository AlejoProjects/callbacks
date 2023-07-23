//exercise #1
//operations performed (callbacks)
const message = ()=>{
    return "this is a callback";
};
//function used to perform callback
const process = ()=>{
    let answer1 = document.getElementById("respuesta1");
    answer1.innerHTML = message();
    console.log("the following message is being displayed as a callback");
    console.log(message());
};
console.log(" ");
//exercise #2 

//operations performed (callbacks)
const classification = (element) => {
    result = typeof(element);
    container = [element,result];
    if(isNaN(Number(container[0]))==false){
        container[0] = Number(container[0]);
        container[1] = typeof(container[0]);
    }
    return(container);
};
//function used to perform callback
const varType = (calu)=> {
    const el = document.getElementById("info_2").value;
    let answer2 = document.getElementById("respuesta2");
    let container = calu(el);

    variableText = "the variable "+container[0]+" is a "+container[1];
    answer2.innerHTML = variableText;
    return variableText;
};

//exercise #3

//operations performed (callbacks)
const sum = (a,b) => {
    const info = ['sum',a+b];
    return info};
const substraction  = (a,b) => {
    const info = ['substraction',Math.abs(a-b)];
    return info
};
const multiplication  = (a,b) => {
    const info = ['multiplication',a*b];
    return info
};
const division  = (a,b) => {
    const info = ['division',a/b];
    return info
};
//function used to perform callback
const operations = (operation) => {
    let answer3 = document.getElementById("respuesta3");
    let a = Number(document.getElementById("Ainfo_4").value);
    let b = Number(document.getElementById("Binfo_4").value);
    let result = operation(a,b);
    answer3.innerHTML = "the operation performed is "+result[0]+" and the result is "+result[1];
    console.log("the operation performed is "+result[0]+" and the result is "+result[1]);
};

//exercise #4
const mayus = (chain) => {return chain.toUpperCase();};
const minus = (chain) => {return chain.toLowerCase();};
const capitalizer = (expression) => {
    let answer4 = document.getElementById("respuesta4");
    let characters = document.getElementById("info_4").value;
    const result = expression(characters);
    let ans =  "the new string is "+result;
    answer4.innerHTML = ans;
    console.log(ans);
};

//exercise #5
let values = [120,3,200,500];
console.log(" ");
console.log("the original values are "+values)
const clasiffier = (container) =>{
    let newValues = [];
    for (i in container){
            if(container[i] > 120){
                newValues.push(container[i]);
            }
    }
    return newValues;
};
const hugeTimes = (times,expression) =>{
    let rta5 = document.getElementById("respuesta5");
    const ans = expression(times);
    console.log("the new array is ["+ans+"]");
    rta5.innerHTML = "the new array is ["+ans+"] and the old one is ["+values+"]";
};
hugeTimes(values,clasiffier);