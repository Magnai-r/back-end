console.log("hello world");

import express, { json } from "express";
// back end--iin code 8000-aas eheldeg bol fronEnd-iinh 3000-aas eheldeg.
const port = 8000;

const app = express();

app.use(json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  const { username, password } = req.body;
  console.log(username.length);
  if (username.length < 5) {
    res
      .status(400)
      .send({
        success: false,
        message: "username zaaval 5-s deesh temdegt avsan baih yostoi",
      })
      .end();
  }
  if (password.length < 8) {
    res
      .status(400)
      .send({
        success: false,
        message: "password zaaval 8-s deesh temdegt avsan baih yostoi",
      })
      .end();
  }
  console.log(req.body, "req");
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
