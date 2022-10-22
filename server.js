const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(`<h4>99 Bottles of beer on the wall</h4>
    <a href="/${98}">Take one down, pass it around</a>
    `);
})

app.get("/:numberOfBottles?", (req, res) => {
    var numberOfBottles = req.params.numberOfBottles || 99;
    var next = numberOfBottles - 1;
    if (numberOfBottles >= 1) {
        res.send(numberOfBottles + " bottles of beer on the wall <a href='/" + next + "'> Take one down, pass it around");
    } else {
        res.send(numberOfBottles + "bottles of beer on the wall <a href ='/'>Start over</a>");
    }
})

app.listen(3000)