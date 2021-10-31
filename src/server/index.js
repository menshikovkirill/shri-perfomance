// const express = require('express');
// var mysql = require('mysql');
// const path = require('path');
// const url = require('url');
 
// const app = express();

// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')));

// var con = mysql.createConnection({
//     socketPath: "/var/run/mysqld/mysqld.sock",
//     user: "c46622_testing_domain_na4u_ru",
//     password: "HoQjaNodjuzic51", 
//     database: 'c46622_testing_domain_na4u_ru'
//   });
  

// app.get('/list_mysql', (req,res) => {
//     con.connect(function(err) {
//         console.log("Connected!");
//     });
      
//     con.query("SELECT * FROM things_list", (err, data, results) => {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//         res.json(data);
//     });
// });

// app.get('/add', (req,res) => {//?task=&group_name=&data_from=&data_to=&day=&
//     const addUrl = url.parse(req.url, true).query;
//     con.query("SELECT * FROM things_list", (err, data, results) => {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//         res.json(data);
//     });
// });


// // app.listen(process.env.APP_PORT, process.env.APP_IP, () => {
// //     console.log(process.env.APP_PORT,  process.env.APP_IP)
// // })

export default async function send(url) {
    let response = await fetch(url);
    let data = await response.json();

    return data;
}