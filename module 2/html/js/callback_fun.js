function greet(name){
    console.log("hello,"+name+"!");
}
function 
sayHellowithDelay(callback){
    setTimeout(function(){
        callback("TRISHA");
    }, 2000);
}
sayHellowithDelay(greet);