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

    db.Todo.findAll({
        where : {
           // completed : false
        }
    }).then(function(todos){
        res.json(todos);
    })

})

// POST /todos : Kaydetme
app.post("/todos", function(req, res){

    let body = _.pick(req.body, "description", "completed");
    db.Todo.create(body).then(function(todo){
        res.json(todo.toJSON());
    }, function(e){
        //res.json(e.toJSON());
        res.status(500).send();
    })

})

// PUT /todos : Güncelleme
app.put("/todos/:id", function(req, res){

    let todoId = req.params.id;
    let body = _.pick(req.body, "description", "completed");
    let attributes = {};

    if(body.hasOwnProperty("description")){
        attributes.description = body.description;
    }
    if(body.hasOwnProperty("completed")){
        attributes.completed = body.completed;
    }
    db.Todo.findOne({
        where : {
            id : todoId
        }
    }).then(function(todo){
        if(todo){

            todo.update(attributes).then(function(todo){
                res.json(todo.toJSON());
            }, function(){
                res.status(400).send();
            })

        } else {
            res.status(404).send({
                error : "Aradığınız obje bulunamadı!!!"
            })
        }
    }, function(){
        res.status(500).send();
    })
})

// DELETE /todos : Silme
app.delete("/todos/:id", function(req, res){

    let todoId = req.params.id;
    db.Todo.destroy({
        where : {
            id : todoId
        }
    }).then(function(rowDeleted){
        if(rowDeleted === 0){
            res.status(404).send({
                error : "Silmek istediğiniz kayıt bulunamamıştır..."
            });
        } else {
            res.status(204).send();
        }
    }, function(){
        res.status(500).send();
    })
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
