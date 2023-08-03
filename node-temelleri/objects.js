
//define
var araba = {
    name : "BMW",
    model : "320i",
    weight : "1.100kg",
    color : "blue",
    start : function(){
        console.log("Araba Çalıştı");
    }
};


//get
console.log(araba);
console.log("Aracın markası : ", araba.name);
console.log("Aracın modeli : ", araba["model"]);


// add
araba.sunroof = "Var";

console.log(araba);

// delete 
delete araba.color;
console.log(araba);

//fonksiyon
araba.start();