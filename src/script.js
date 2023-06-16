



































 function increment() {
    var number = 0;
    return number++; // това ++ се изпълнява на следващия ред
 }

 
 var externalVariable = increment();
 console.log(externalVariable);
