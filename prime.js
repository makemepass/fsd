const prompt=require('prompt-sync')();
const num=prompt('enter a number');
number=Number(num);
let flag=1;
for (let i=2;i<number;i++){
    if(number%i==0){
        flag=0;
    }
}
if(flag==0){
    console.log("not a prime number");
}
else{
    console.log("prime number");
}
