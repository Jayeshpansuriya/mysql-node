import mysql from 'mysql2/promise';

//> 1.conect to the database
const db = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'Root@123',
    database: 'mysql_db'
})


console.log("MySql Connected Successfully");


//2 we need to create a db 

// await db.execute(`create database mysql_db`);
// console.log(await db.execute('show databases'));

//3 then we to create a table 
// await db.execute(`
//     create table users(
//     id int auto_increment primary key,
//     uername vARCHAR(100) not null,
//     email VARCHAR(100) not null uniqueht
//     );
//     `)

//4 is to perform crud operation
//! using inline values (not recommended)
// await db.execute(`
//     insert into users(uername, email) values ('vinod','vinode@thapa.gmail.com')
//     `);

//* using prepared statment (best practice)

// await db.execute(`
//     insert into users(uername,email) values(?,?)

//     `,
//     ["thapa", "thapa@thapa.com"]

// );


// const values = [

//     ["alice","alice@execute.com"],
//     ["bob","bob@example.com"],
//     ['charlie',"charlise@exampal.com"],
//     ["david","david@exampla.com"],
//     ["emma","emma@exampal.com"]
// ];

// await db.query(`
//     insert into users (uername, email) values ?
//     `,[values]);

// //? read 

// const [rows] =await db.execute(`select * from users`);
// console.log(rows);
// // // [rows,field]

// //? update query 
// update table_name 
// set column1 = value1,colaman= value2,...
// where condition

// try {
//     const [rows] = await db.execute("update users set uername= 'vinodThapa' where email='alice@execute.com' ");
//     console.log("All Users:",rows);
// } catch (error) {
//     console.error(error);
// }

//? delete query

// delete from tble_name
// where condition

try {
    const [rows]= await db.execute(`delete from users where email='alice@execute.com'`);
    console.log(rows);
} catch (error) {
    console.log(error);
}

const [rows] =await db.execute(`select * from users`);
console.log(rows);