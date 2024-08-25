let express = require("express");
let app = express();
const PORT = 3000;

app.get("/custom-commit", (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let commit = type + ": " + message;
  res.send(commit);
});
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let certificate =
    "This certificate is awarded to" +
    firstName +
    " " +
    lastName +
    " for successfully completing the" +
    courseName 
  res.send(certificate);
});
app.get("/autoreply", (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let result =
    "Dear customer, thank you for reaching out to me.     Unfortunately, I'm out of office from " +
    startMonth +
    " till " +
    endMonth +
    ".Your enquiry will be resolved by another          colleague.";
  res.send(result);
});
app.get("/secureurl", (req, res) => {
  let domain = req.query.domain;
  let result = "https://" + domain;
  res.send(result);
});
app.get("/sendotp", (req, res) => {
  let otpCode = req.query.otpCode;
  let result = "Your OTP for account verification is"   + otpCode+ " Do not share this with anyone"
  res.send(result);
});
app.get("/welcomel", (req, res) => {
  let firstName = req.query.firstName;
  let name = req.query.name;
  let email = req.query.email;
  let result = "Hey" + firstname + "We're excited to have you here, we'll send future notifications to your registered mail ("+ ")"
  res.send(email);
});
app.get("/github-profile", (req, res) => {
  let userName = req.query.username;
  let domain = "https://github.com/" + userName;
  res.send(domain);
});
app.get("/text-to-csv", (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + '' + email + '' + rollNumber;
  res.send(result)
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
