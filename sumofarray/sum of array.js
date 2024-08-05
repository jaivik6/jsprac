let arr = [];
function sumofarray(){
    let a = parseInt(document.getElementById("sumarr").value);
    arr.push(a)
    let sum =0;
    for(let i=0 ; i<arr.length; i++ ){
        sum += arr[i]
    }
    let avr = sum / arr.length ;

    document.getElementById("result").innerHTML = sum;
    document.getElementById("ans").innerHTML = avr;

}