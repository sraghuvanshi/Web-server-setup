const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define path for express config
const publicPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Saksham Raghuvanshi"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    name: "Saksham Raghuvanshi"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    helpText: "How can we help?",
    name: "Saksham Raghuvanshi"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "this is forecast",
    location: "Delhi"
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "404",
    errorMsg: "The help article you are trying to find doesnt exist",
    name: "No one actually"
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "404",
    errorMsg: "The page you are trying to find doesnt exist",
    name: "No one actually"
  });
});

app.listen("3000", () => {
  console.log("Server up and running on port 3000. Love you 3000!");
});
