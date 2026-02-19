const prompt = require("prompt-sync")();
function fib(n){
  let n1=0, n2=1;
  console.log(n1);
  if(n>1){
    console.log(n2);
    for(let i=2;i<n;i++){
      let n3=n1+n2;
      console.log(n3);
      n1=n2;
      n2=n3;
    }
}
  

}
n=parseInt(prompt("enter any number:"));
result=fib(n);
console.log(`${result}`);