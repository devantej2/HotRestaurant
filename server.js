// Declaring Dependencies
const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create arrays to hold reservations and waitlist entries

var reservations = [
    {
        name: "Barry White",
        phone: "777-000-444",
        email: "bwhite@glory.com",
        id: "lkasndoa"

    }

];

var waitlist = [];


// Response to request each html file

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Returning items in the reservation and waitlist arrays in JSON format

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Creates new reservation from user input and displays in JSON format

app.post('/api/reservations', function (req, res) {

    var newReservation = req.body;

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);

});

app.listen(port, function () {
    console.log(`Example app listening on port port!`);
});