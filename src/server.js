import express from "express";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => res.render("home"));
const handleListen = () => console.log("Hello http://localhost:3000");

app.listen(3000, handleListen);
