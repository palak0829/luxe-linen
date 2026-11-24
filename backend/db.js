const oracledb = require('oracledb');

async function getUsers() {
  const connection = await oracledb.getConnection({
    user: "PALAK", 
    password: "DB Password",
    connectString: "Service Name",
    walletLocation: "./Wallet"
  });
  const result = await connection.execute(`SELECT * FROM USERS`);
  console.log(result.rows);
  await connection.close();
}
getUsers();