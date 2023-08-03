// Diziler - Arrays

var liste = ["Deniz", {type: "movie", duration : 1200} ,100.2 ,true];
console.log(liste);

liste.push("Sahil");
console.log(liste);

console.log(liste[1].type);

console.log(liste[0]);

//forEach(function(){})
liste.forEach(function(item, index){
    console.log(index + " => " + item);
})