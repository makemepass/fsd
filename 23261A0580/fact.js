const prompt = require("prompt-sync")();
function fact(n) {
    
    if(n==0)
        return 1;
    else
        return n*fact(n-1);
}
n=parseInt(prompt("enter any number:"));
result=fact(n);
console.log(`${result}`);
