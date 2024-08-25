const express = require('express');
const app = express();
const port = 3000;

function generateProfileUrl(username) {
    return 'https://github.com/' + username;
}

function generateCertificate(firstName, lastName, courseName) {
    return 'This certification is awarded to ' + firstName + ' ' + lastName + ' for completing the course ' + courseName.toUpperCase();
}

function calculateGrade(maths, science, english) {
    let totalMarks = maths + science + english;
    let gradeInPercentage = ((totalMarks / 300) * 100);
    return 'Your grade in percentage is ' + gradeInPercentage + '%';
}

function splitBill(billAmount, numberOfFriends) {
    let splitAmount = billAmount / numberOfFriends;
    return 'Result: Each friend owes Rs. ' + splitAmount + ' against the bill';
}

function calculateSalary(totalHours, hourlyWage) {
    let monthlySalary = hourlyWage * totalHours;
    return 'Result: Your monthly salary is ₹' + monthlySalary;
}

app.get('/github-profile', function(req, res) {
    let username = req.query.username;
    res.send(generateProfileUrl(username));
});

app.get('/certificate', function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName = req.query.courseName;
    res.send(generateCertificate(firstName, lastName, courseName));
});

app.get('/grade', function(req, res) {
    let maths = parseInt(req.query.maths, 10);
    let science = parseInt(req.query.science, 10);
    let english = parseInt(req.query.english, 10);
    res.send(calculateGrade(maths, science, english));
});

app.get('/split-bill', function(req, res) {
    let billAmount = parseFloat(req.query.billAmount);
    let numberOfFriends = parseInt(req.query.numberOfFriends, 10);
    res.send(splitBill(billAmount, numberOfFriends));
});

app.get('/monthly-salary', function(req, res) {
    let hourlyWage = parseFloat(req.query.hourlyWage);
    let totalHours = parseFloat(req.query.totalHours);
    res.send(calculateSalary(totalHours, hourlyWage));
});

app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});
