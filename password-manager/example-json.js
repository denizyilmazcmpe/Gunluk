var person = {
    name : 'Deniz',
    lastname : 'Yilmaz'
};

console.log(person);
console.log(typeof person);

// JSON'a cevirmek...

var jsonObject = JSON.stringify(person);

console.log(jsonObject);
console.log(typeof jsonObject);

// Object'e cevirmek...

var reObject = JSON.parse(jsonObject);

console.log(reObject);
console.log(typeof reObject);