function bill(){
    let dec = document.getElementById("b").value;
    let amount = (document.getElementById("d").value);
    let session = JSON.parse(sessionStorage.getItem("item"))
    let type= "";   
    if(amount>=0){
        type = "income";
    }
    else{
        typye = "expence";
    }
    if(session == null){
        session = [];
    }
    session.push({
        dec:dec,
        amount:amount,
        type:type
    });
    sessionStorage.setItem("item",JSON.stringify(session));
    console.log(JSON.parse(sessionStorage.getItem("item")))
    let sum = 0;
    session.forEach((x) => {
        sum+=parseInt(x.amount);
    })
    console.log(sum);
    document.getElementById("t").innerHTML =sum;
    let h = document.createElement("li");
    let n = document.createTextNode(dec+" "+amount);
    h.appendChild(n);
    document.getElementById("history").appendChild(h);
    let income = 0;
    let expence = 0; 
    session.forEach((x) => {
        if(x.type ==="income"){
            income+=parseInt(x.amount);

        }
        else{
            expence+=parseInt(x.amount);
        }
    })
    document.getElementById("income").innerHTML = income;
    document.getElementById("expence").innerHTML = expence;
    
}