// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    //set up close game by pressing 'control C'
    if (key === "\u0003") {
      process.exit();
    }
    //Bind move keys to W,A,S,D
    if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "l") {
      connection.write("Say: ICU");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
