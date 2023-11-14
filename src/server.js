const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Damo:boxofrocks@cluster0.rixw3hn.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");
});

app.use(Router);

app.listen(3001, () => {
  console.log(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));
});

