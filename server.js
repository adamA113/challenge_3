var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.post('/checkout', function (req, res) {
    console.log(req)
    
    
    // res.end();
});

app.get('/checkout', function (req, res) {
    // res.render("/");
});

app.listen(3000, () => {
    console.log('server is listening ')
})

