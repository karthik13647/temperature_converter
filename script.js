const text1=document.getElementById("text1");
const tofaurenheit=document.getElementById("tofaurenheit");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;
function convert(){
    if(tofaurenheit.checked){
        temp=Number(text1.value);
        temp =temp*9/5+32;
        result.textContent=temp.toFixed(1)+"F";
    }
    else if(tocelsius.checked){
        temp=Number(text1.value);
        temp =temp*9/5+32;
        result.textContent=temp.toFixed(1)+"C";
    }
    else{
        result.textContent="select the Unit";
    }
}