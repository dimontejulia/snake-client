/**
 * Establishes connection with the game server
 */
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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
