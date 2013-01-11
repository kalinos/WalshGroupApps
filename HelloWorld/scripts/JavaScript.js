function addListeners(){
if(window.addEventListener){
document.getElementById('mybtn').addEventListener("click",btn1func,false);
}
else if(window.attachEvent){

}
function btn1func(){
alert(this.id+" : mouse-click makes script run");

    

}
}

