function cont(){
    let d = new Date("august 1, 2024").getTime();

    let a = setInterval(function(){
    let now = new Date().getTime();
    let  b = d - now;
    let days = Math.floor(b / (1000 * 60 * 60 * 24));
    let hours = Math.floor((b % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((b % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((b % (1000 * 60)) / 1000);


    document.getElementById("t").innerHTML = "D:" + days  + " H:" + hours  + " M:" + minutes + " S:" + seconds;
    })
}