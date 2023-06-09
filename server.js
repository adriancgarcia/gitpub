const express = require("express")

const drinks = require("./models/drinks.js")
const app = express()





app.get("/greeting", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.render('index.ejs')
})






// Listener
app.listen(3000, () => {
    console.log('LISTENING ON port 3000')
})