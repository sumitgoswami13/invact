let express = require("express");
let app = express();
const PORT = 3000;

app.get("/shout", (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});
app.get("/fullname", (req, res) => {
  let firstName = req.query.firstName
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName)
});
app.get("/date", (req, res) => {
  let month= req.query.month;
  let year = req.query.year;
  let date = month + " " + year;
  res.send(date)
});
app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greeting = "Namaste, " + name + "!";
  res.send(greeting);
});
app.get("/address", (req, res) => {
    let street = req.query.street;
    let city = req.query.city;
    let state = req.query.state;
    let addreess = street + ", " + city + ", " +           state;
    res.send(addreess);
});
app.get("/email", (req, res) => {
  let userName = req.query.username;
  let domain = req.query.domain
  let email = userName + "@" + domain;
  res.send(email);
});
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
