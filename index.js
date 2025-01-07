const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Welcome mesaage
function getWelcomeMessage() {
  return 'Welcome to our page';
}
// Greeting message
function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

// function to check passsword strength
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return 'Strong';
  }
  return 'weak';
}

// Calculate sum
function add(num1, num2) {
  return (num1 + num2).toString();
}

// Check subscription
function checkSubscriptionStatus(username, subscribed) {
  let subscription = subscribed === 'true';
  let res;
  if (subscription) {
    res = ' is subscribed';
  } else {
    res = ' is not subscribed';
  }
  return username + res;
}

// calculate price after discount
function calculateTotalPrice(price, discount) {
  let totalPrice = price - (price * discount) / 100;
  return totalPrice.toString();
}

// Personalise greeting
function personaliseGreet(name, age, gender) {
  return 'Hello, ' + name + '! ' + "You're a " + age + ' old ' + gender;
}

// Calculate price after discount and tax
function calculatePrice(price, discount, tax) {
  let discountedPrice = parseFloat(calculateTotalPrice(price, discount));
  let totalPrice = discountedPrice + (discountedPrice * tax) / 100;
  return totalPrice.toString();
}

// Calculate Exercise time
function calculateExerciseTime(running, cycling, swimming) {
  let totalTime = running + cycling + swimming;
  return totalTime.toString();
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  const username = req.query.username;
  res.send(getGreetingMessage(username));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

app.get('/add', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(add(num1, num2));
});

app.get('/check-subscription', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(checkSubscriptionStatus(username, subscribed));
});

app.get('/calculate-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateTotalPrice(price, discount));
});

app.get('/personalised-greeting', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;
  res.send(personaliseGreet(name, age, gender));
});

app.get('/taxated-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calculatePrice(price, discount, tax));
});

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calculateExerciseTime(running, cycling, swimming));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
