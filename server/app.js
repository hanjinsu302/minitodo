const express = require("express");
const app = express();
const port = 8000;

// app.set("view engine", "ejs"); //view engine 등록
// app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function (req, res) {
//   res.render("index");
// });

const todoRouter = require("./routes/todo");
app.use("/api", todoRouter); // 기본주소: localhost:PORT/api

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
