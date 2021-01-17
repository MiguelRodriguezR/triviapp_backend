const express = require("express");
const conectDB = require("./config/db");
const cors = require("cors")

const app = express();
conectDB();

//CORS
app.use(cors());
app.use(express.json({ extended: true }));
const port = process.env.PORT || 4000;

app.use("/api/scores", require("./routes/scores"));

app.listen(port, '0.0.0.0', () => {
  console.log("Running on", port);
});
