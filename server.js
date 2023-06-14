const express = require("express")

const drinks = require("./models/drinks")
const app = express()


// NIDDLEWARE
app.use(express.static("public")) // treat the public folder as a static file server





app.get("/greeting", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


// INDEX ROUTE
app.get("/drinks", (req, res) => {
    res.render('drinks/index.ejs', {drinks})
})

// SHOW ROUTE - SHOWS ONE DRINK
app.get("/drinks/:id", (req, res) => {
    const id = req.params.id;
    const drink = drinks[id];
    
// console.log(drinks, id)
    res.render("drinks/show.ejs", {drink})
    });

// Listener
app.listen(3000, () => {
    console.log('LISTENING ON port 3000')
})