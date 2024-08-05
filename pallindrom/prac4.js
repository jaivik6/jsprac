function palindrom(){
    let name = document.getElementById("val").value;
    let rev = name.split("").reverse().join("")
    console.log(rev)
        if (name==rev){
        document.getElementById("result").innerHTML = "value is palindrom.";
    }
    else{
        document.getElementById("result").innerHTML = "value is not palindrom.";
    }
}