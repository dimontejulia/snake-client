/**
 * Establishes connection with the game server
 */
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    // host: "135.23.222.131",
    // port: 50542,
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on(
    "connect",
    () => {
      console.log("Successfully connected to game server");
      conn.write("Name: JD");
    }
    /* Hard-coded movements
    setTimeout(() => conn.write("Move: left"), 50),
    setTimeout(() => conn.write("Move: left"), 50),
    */
  );

  conn.on("data", (message) => console.log(message));

  return conn;
};

module.exports = { connect };
