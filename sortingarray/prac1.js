let array = [];
function sortingNumber(){
    let number = document.getElementById("str").value ;
    // let number1 = document.getElementById("str1").value ;
    array.push(number);
    let sorted=array.sort(function(a,b){return a-b });
    document.getElementById("result1").innerHTML = "ascending order sort"+ JSON.stringify(sorted)
    let sorted1=array.sort(function(a,b){return b-a });
    document.getElementById("result2").innerHTML = "descending order sort"+ JSON.stringify(sorted1)

    document.getElementById("result").innerHTML = "main array"+ JSON.stringify(array)  ;
    
}
