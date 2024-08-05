let object = [];
function objectcreat(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let no = document.getElementById("no").value;
    object.push(
        {
        name : name,
        age : age,
        country : no,
        }
    )
    document.getElementById("result").innerHTML = JSON.stringify(object);
}