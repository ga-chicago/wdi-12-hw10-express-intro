// DEPENDENCIES
const express = require('express');
const app = express();
MissionLaunch = require("./models/marsMissions.js")

// run `npm install` to install dependencies in package.json //// Done

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created            //// Done
// views/missions folder has not been created   //// Done





// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// PORT
const port = 3000;

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
