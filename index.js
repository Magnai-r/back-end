
// console.log("hello world");
import express, { json } from "express";
import dotenv from "dotenv"
import cors from "cors"
import {userRouter} from './routes/userRouter.js'
import {orderRouter} from './routes/orderRouter.js'

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());
app.use(userRouter);
app.use(orderRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


// import { v4 as uuidv4 } from "uuid";
// // back end--iin code 8000-aas eheldeg bol frontEnd-iinh 3000-aas eheldeg.
// const port = 8000;
// // get -medeelel avah ued, post- create hiih ued, put- update hiih ued, delete-ustgahdaa ashiglana.
// const app = express();

// app.use(json());

// let users = [];
// let order = [];

// app.post("/order/create", (req, res) => {
//   const { userId, food, price, createdAt, updatedAt } = req.body;
//   order.push({
//     userId,
//    food,
//    price,
//    createdAt: new Date(),
//    updatedAt: new Date(),
//    id: uuidv4(),
//   });

//   res.send({
//     success: true,
//     message: "succesful",
//   });
// });

// app.post("/user/create", (req, res) => {
//   const { username, gender, age, email } = req.body;
//   users.push({
//     username,
//     gender,
//     age,
//     email,
//     id: uuidv4(),
//   });

//   res.send({
//     success: true,
//     message: "succesful",
//   });
// });

// app.get("/user/", (req, res) => {
//   const { id } = req.body;
//   const user = users.find((user) => {
//     return user.id === id;
//   });
//   console.log(users, "user");

//   res.send(user);
// });

// app.delete("/user/delete", (req, res) => {
//   const { id } = req.body;
//   users = users.filter((user) => {
//     return user.id !== id;
//   });
//   res.send({ success: true, message: "removed" });
// });

// app.put("/user/update", (req, res) => {
//   const { id, username, email, age, gender } = req.body;
//   users.map((user) => {
//     if (user.id === id) {
//       user.username = username;
//       user.email = email;
//       user.gender = gender;
//       user.age = age;
//     }
//     return user;
//   });
//   res.send({
//     success: true,
//     message: "updated",
//   });
// });

// app.get("/users", (_, res) => {
//   console.log("users");

//   res.send(users).end();
// });

// app.use(json());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/user", (req, res) => {
//   const { username, password } = req.body;
//   console.log(username.length);
//   if (username.length < 5) {
//     res
//       .status(400)
//       .send({
//         success: false,
//         message: "username zaaval 5-s deesh temdegt avsan baih yostoi",
//       })
//       .end();
//   }
//   if (password.length < 8) {
//     res
//       .status(400)
//       .send({
//         success: false,
//         message: "password zaaval 8-s deesh temdegt avsan baih yostoi",
//       })
//       .end();
//   }
//   console.log(req.body, "req");
//   res.send({ success: true });
// });

