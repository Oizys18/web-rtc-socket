import express from "express";

const app = express();

const handleListen = () => console.log("Hello Local 3000");

app.listen(3000, handleListen);
