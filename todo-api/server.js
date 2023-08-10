var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var _ = require("underscore");
var PORT = 3000;

/**************** Database Bağlantısı *******************/
var db = require("./db");
/******************************************************/

app.use(bodyParser.json());

// GET /todos : Listeleme
app.get("/todos", function(req, res){

    res.send("get metoduyla listeleme işlemi yapılır...");
})

// POST /todos : Kaydetme
app.post("/todos", function(req, res){

    let body = _.pick(req.body, "description", "completed");
    db.Todo.create(body).then(function(todo){
        res.json(todo.toJSON());
    }, function(e){
        res.json(e.toJSON());
    })

})

// PUT /todos : Güncelleme
app.put("/todos/:id", function(req, res){

    res.send("put metoduyla update işlemi yapılır...");
})

// DELETE /todos : Silme
app.delete("/todos/:id", function(req, res){

    res.send("delete metoduyla silme işlemi yapılır...");
})

db.sequelize.sync().then(function(){
    console.log('Database bağlantısı başarılıdır');
    app.listen(PORT, function(){
        console.log('Express Listening on ' + PORT + "!");
    });
}).catch(function(err){
    console.error('Database bağlantısı sırasında hata oluştu:', err);
});

// Diğer kodlarınızı buraya ekleyebilirsiniz
