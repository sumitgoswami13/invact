let express = require("express");
let app = express();
let port = 3000;

app.get("/bmi", (req, res) => {
    let weight = parseFloat(req.query.weight);
    let height = parseFloat(req.query.height);
    let bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});

app.get("/checkout", (req, res) => {
    let product = req.query.product;
    let units = parseInt(req.query.units);
    let price = parseFloat(req.query.price);
    let total_price = units * price;
    res.send("Your total for " + units + " " + product + " is " + total_price);
});

app.get("/grade", (req, res) => {
    let math = parseInt(req.query.maths);
    let science = parseInt(req.query.science);
    let english = parseInt(req.query.english);
    let gradeInPercentage = ((math + science + english) / 300) * 100;
    res.send("Your grade in percentage is " + gradeInPercentage + "%");
});

app.get("/discounted-price", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let discount = parseFloat(req.query.discount);
    let finalPrice = (cartTotal - cartTotal * (discount / 100));
    res.send("Result: Your bill amount is " + finalPrice);
});

app.get("/split-bill", (req, res) => {
    let billAmount = parseFloat(req.query.billAmount);
    let numberOfFriends = parseInt(req.query.numberOfFriends);
    let splitAmount = (billAmount / numberOfFriends);
    res.send("Result: Each friend owes Rs" + splitAmount + " against the bill");
});

app.get("/celsius-to-fahrenheit", (req, res) => {
    let celsius = parseFloat(req.query.temperature);
    let fahrenheit = ((celsius * 9) / 5 + 32);
    res.send("Result: " + fahrenheit + " Fahrenheit");
});

app.get("/monthly-salary", (req, res) => {
    let totalHours = parseInt(req.query.totalHours);
    let hourlyWage = parseFloat(req.query.hourlyWage);
    let monthlySalary = (hourlyWage * totalHours);
    res.send("Result: Your monthly salary is ₹" + monthlySalary);
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
