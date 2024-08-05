function display(a){
    document.getElementById("imp").value += a;
}
function clearscr(){
    document.getElementById("imp").value = "";
}
function solve(){
    let a =document.getElementById("imp").value;
    let b = eval(a);
    document.getElementById("imp").value=b;
}