const express = require("express")

const drinks = require("./models/drinks")
const app = express()





app.get("/greeting", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


// INDEX ROUTE
app.get("/drinks", (req, res) => {
    res.render('index.ejs', {drinks})
})


// SHOW ROUTE - SHOWS ONE DRINK
app.get("/drinks/:id", (req, res) => {
    const id = req.params.id;
    const drink = drinks[id];
    
    // const images = document.getElementsByTagName(img);
        // for (let i = 0; i < images.length; i++) {
        
        //     images[i] = images[i] + '.' + extension;
//         // }
// console.log(drinks, id)
    res.render("show.ejs", {drink})
    });

// Listener
app.listen(3000, () => {
    console.log('LISTENING ON port 3000')
})