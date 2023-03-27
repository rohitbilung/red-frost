const { Client } = require("pg");

let databaseConnect = async function () {
  try {
    const client = new Client({
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
    });
    client.connect(function (err) {
      if (err){
        console.log(err);
      }else{
        console.log("PG SQL Connected!");
      }
    });
  } catch (error) {
    console.log("cannot connect, something is error", error);
  }
};

module.exports = databaseConnect();
