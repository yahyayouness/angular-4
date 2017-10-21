

function sayHello(){
    throw new Error("Une erreur");
    return "Hello";
}

function printHello(){
    var helloStr = sayHello();
    console.log(helloStr);
}

printHello();





