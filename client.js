const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.88",
    port: 50541, // PORT number here,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Connection Established");
    conn.write("Name: MCR");
    conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  connect,
  setupInput
};
