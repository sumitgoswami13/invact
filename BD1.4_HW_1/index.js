const express = require('express');
const app = express();
const port = 3000;

function getWelcomeMessage() {
    return 'We will now learn functions!';
}

function getGreetingMessage(username) {
    return 'Hey, ' + username + '! Are you ready to learn functions with us?';
}

function checkYearsOfExp(yearsOfExp) {
    if (yearsOfExp > 0) {
        return 'You have some experience with functions. Great!';
    } else {
        return 'No worries. You will start writing functions in no time!';
    }
}

function getTime(days, hours) {
    return days * hours;
}

function getModuleCompletion(username, hasCompleted) {
    if (hasCompleted) {
        return username + ' has completed the modules';
    } else {
        return username + ' has not completed the modules';
    }
}

function getPersonalizedGreeting(city, name) {
    return 'Hey, ' + name + '! What\'s famous about ' + city + '?';
}

function findAge(birthyear) {
    let currentYear = 2024;
    return currentYear - birthyear;
}

function findRequiredTime(days, hours) {
    let totalHours = days * hours;
    if (totalHours >= 30) {
        return 'The time being dedicated is sufficient for learning functions';
    } else {
        return 'The time being dedicated is not sufficient for learning functions';
    }
}

app.get('/welcome', function(req, res) {
    res.send(getWelcomeMessage());
});

app.get('/greet', function(req, res) {
    let username = req.query.username;
    res.send(getGreetingMessage(username));
});

app.get('/message', function(req, res) {
    let yearsOfExp = parseInt(req.query.yearsOfExp, 10);
    res.send(checkYearsOfExp(yearsOfExp));
});

app.get('/hours', function(req, res) {
    let days = parseFloat(req.query.days);
    let hours = parseFloat(req.query.hours);
    res.send(getTime(days, hours).toString());
});

app.get('/module-completion-status', function(req, res) {
    let username = req.query.username;
    let hasCompleted = req.query.hasCompleted === 'true';
    res.send(getModuleCompletion(username, hasCompleted));
});

app.get('/personalized-greeting', function(req, res) {
    let city = req.query.city;
    let name = req.query.name;
    res.send(getPersonalizedGreeting(city, name));
});

app.get('/find-age', function(req, res) {
    let birthyear = parseInt(req.query.birthyear, 10);
    res.send(findAge(birthyear).toString());
});

app.get('/is-time-sufficient', function(req, res) {
    let days = parseFloat(req.query.days);
    let hours = parseFloat(req.query.hours);
    res.send(findRequiredTime(days, hours));
});

app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});
