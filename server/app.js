const express = require('express')
const request = require('request')
const cors = require('cors')
app.require(cors)
const app = express()
const port = 80;
const path = require('path')

// ----- Start of routes -----
// app.get('/', (req, res) => res.send('Testing'))

//Creating a path to index.html so this file will show on this certain endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

//Making the client folder public/accessible to public
app.use(express.static(path.join(__dirname, "../client")));


app.get('/results/:id', (req,res) => {
    const searchID = parseInt(req.params.id)
    try{
        res.send(searchResults[searchID])
    }catch(err){
        console.log(err)
    }
})
app.listen(port, () => {
    console.log("Server listening on port " + port);
  });

// ----- End of routes -----
