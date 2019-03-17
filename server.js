const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/partials')     //to create partial file.
app.set('view engin', 'hbs');                   //To set the view folder.


// app.use((req, res, next) => {                       //This method will execute everytime when someone visited a page
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);                               //this will print the current time and details to the console.
//     fs.appendFileSync('server.log', log + '\n');
//     next();
// });

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));//This function will allow the users to access the files in public directory through url.




//requests
app.get('/', (req, res) => {
    //res.send('<h1>Hello Express...</h1>');
    res.render('index.html');
});


app.listen(port, () =>{
    console.log(`Server is up on port ${port}.`);
});