//jshint esversion:6
const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const port = 3000;
var item = [];

app.get('/', function (req, res) {

    var today = new Date();
    // var currentDay = today.getDay();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("hi-IN", options);

    console.log(day);

    res.render('list', {
        day: day,
        todo: item,
    });

});

app.post('/', function (req, res) {
    todo = req.body.todo;
    if(todo !== null){
        item.push(todo);
        res.redirect("/");
    }
    
});



app.listen(port, function () {
    console.log('Node Server id running on localhost:' + port.toString());
});

