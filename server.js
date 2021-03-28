const express = require("express");
const app = express();
const mongoose = require("mongoose");
const playerRoutes = require("./routes/playerRoutes");
const teamsRoutes = require("./routes/teamRoutes");

const cors = require("cors");

app.use(cors());

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI,
    //"mongodb://127.0.0.1:27017/esportspros",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("db connected");
};

connectDB();

app.use(express.json({ extended: false }));
app.use("/players", playerRoutes);
app.use("/teams", teamsRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server started on port", PORT));
