function Module7(object,property)
{
    try    {
const value = object[property];
return value;
 }
    catch(error)
    { 
        if (error instanceof TypeError)
console.log('TypeError, fix your code!!!',error)
    else 
    console.log("Not my problems",error);
return undefined;
}
}
const obj = undefined;
const obj2 = {word: "Modsen"}
console.log(Module7(obj2,"word"))
console.log(Module7(obj,"word"));