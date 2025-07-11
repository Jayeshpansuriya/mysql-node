import mysql from 'mysql2/promise';

//> 1.conect to the database
const db = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:  'root',
    password: 'password',
    // database: 'mysql_db'
})


console.log("MySql Connected Successfully");


//2 we need to create a db 

await db.execute(`create database mysql_db`);
console.log(await db.execute('show databases'));

//3 then we to create a table 
//4 is to perform crud operation