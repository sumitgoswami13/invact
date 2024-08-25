const express = require("express");
const app = express();
const port = 3000;

app.get("/check-whole-number", (req, res) => {
    let number = parseInt(req.query.number);
    let result;
    if (number >= 0) {
        result = "Number is whole number";
    } else {
        result = "Number is not whole number";
    }
    res.send(result);
});

app.get("/check-equal", (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let result;
    if (num1 === num2) {
        result = "Numbers are equal";
    } else {
        result = "Numbers are not equal";
    }
    res.send(result);
});

app.get("/check-active", (req, res) => {
    let isActive = req.query.isActive === "true";
    let result;
    if (isActive) {
        result = "User is Active";
    } else {
        result = "User is not Active";
    }
    res.send(result);
});

app.get("/check-discount", (req, res) => {
    let cost = parseInt(req.query.cost);
    let result;
    if (cost > 1000) {
        result = "User is eligible for a discount";
    } else {
        result = "User is not eligible for a discount";
    }
    res.send(result);
});

app.get("/check-experience", (req, res) => {
    let workExperience = parseFloat(req.query.workExperience);
    let result;
    if (workExperience > 0) {
        result = "experienced";
    } else if (workExperience < 0) {
        result = "non-working";
    } else {
        result = "fresher";
    }
    res.send("Person is " + result);
});

app.get("/check-result", (req, res) => {
    let result = parseFloat(req.query.result);
    let grade;
    if (result > 80) {
        grade = "A";
    } else if (result > 50) {
        grade = "B";
    } else {
        grade = "Fail";
    }
    res.send("The grade is " + grade);
});

app.get("/check-attendance", (req, res) => {
    let attendance = parseInt(req.query.attendance);
    let result;
    if (attendance < 50) {
        result = "low";
    } else if (attendance <= 90) {
        result = "moderate";
    } else {
        result = "high";
    }
    res.send("Attendence is " + result);
});

app.get("/check-rating", (req, res) => {
    let stars = parseInt(req.query.stars);
    let result;
    if (stars < 3) {
        result = "low";
    } else if (stars <= 4) {
        result = "medium";
    } else {
        result = "high";
    }
    res.send("Restaurant rating is " + result);
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
