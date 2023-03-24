// establishes a connection with the game server and allows user input
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());
