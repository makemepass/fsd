const prompt=require('prompt-sync')();
function reverseString(str){
    let newstr=" ";
    for(let i=str.length-1;i>=0;i--){
        newstr=newstr+str[i];
    }
    return newstr;
}
const string=prompt('enter a string ');
const rev=reverseString(string);
console.log(`reversed string is ${rev}`);