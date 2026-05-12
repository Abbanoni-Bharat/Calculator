function display(a){
    document.getElementById("input").value += a;
}
function calci(){
    let exp = document.getElementById("input").value;
    document.getElementById("input").value = eval(exp);
}
function clearinp(){
    document.getElementById("input").value = "";
}