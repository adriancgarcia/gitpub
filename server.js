const express = require("express")

const drinks = require("./models/drinks.js")
const app = express()





app.get("/greeting", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


// INDEX ROUTE
app.get("/drinks", (req, res) => {
    res.render('index.ejs', {drinks})
})


// SHOW ROUTE
app.get("/drinks/:id", (req, res) => {
    res.render('show.ejs', {drinks});
    });







// Listener
app.listen(3000, () => {
    console.log('LISTENING ON port 3000')
})