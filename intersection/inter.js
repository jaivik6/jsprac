let arr = [];
let arr1 = [];
function intersection(){
    let ar = document.getElementById("no").value;
    let j = document.getElementById("no1").value;
    arr.push(ar);
    arr1.push(j);
    let a = arr.filter(
        (element) => arr1.includes(element)
    );
    document.getElementById("result").innerHTML = a;
}