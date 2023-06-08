// require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express")
// const morgan = require("morgan") // importing the morgan library.
// const PORT = process.env.PORT
const app = express()

// app.use(morgan("dev")) //SETS UP OUR LOGGING MIDDLEWARE

app.get("/greeting", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})





// Listener

app.listen(3000, () => {
    console.log('LISTENING ON port 3000')
})
// app.listen(PORT, () => {
//     console.log(`LISTENING ON PORT ${PORT}`)
// })