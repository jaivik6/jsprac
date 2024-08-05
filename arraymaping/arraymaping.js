let arr = []
let arr2 = []
function arrmaping(){
    let num = document.getElementById("a").value;
    arr.push(num);
    let val = arr.map((doublevalue) => doublevalue * 2);
    //arr2.push(val);
   console.log("new array" + val); 
}