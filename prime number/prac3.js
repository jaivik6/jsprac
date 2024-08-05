function primenumber(){
    let num = document.getElementById("num").value;
 let flag = true;
 for(let i=2; i<num; i++){
    if(num%i==0){
        flag = false
    }
    if(num<=2){
        document.getElementById("result1").innerHTML = "is not prime.";
    } 
 }
   if(num==1){
    document.getElementById("result").innerHTML = "neither prime nor not prime"
   }
  else if(flag==true){
    console.log("is prime")
    document.getElementById("result").innerHTML = "is prime.";
        }
     
            else{
    console.log("is not prime")
    document.getElementById("result").innerHTML = "is not prime.";
        }
    
}