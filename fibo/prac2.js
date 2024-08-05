function fibo(){
    let num = parseInt(document.getElementById("no").value);
    let a = 0;
    let b = 1;
    for(let i=1; i<=num; i++){
        console.log(a);
        temp=a=b;
        a=b;
        b=temp;
       // document.getElementById("fib").innerHTML = "fibonacci series:" + ;
    }
}