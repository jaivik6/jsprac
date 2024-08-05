let arr = ["5", "9", "15", "18", "22"];
let arr1 = ["10", "13", "18", "20", "9"];
function mergsorted(){
let a = [...new Set(arr),...new Set(arr1)];
let sorted = a.sort(function(a,b){return a-b})
console.log(a)
}