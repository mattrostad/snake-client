// establishes a connection with the game server
const {connect, setupInput} = require('./client');

console.log("Connecting ...");
connect();
setupInput()