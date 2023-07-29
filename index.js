require("dotenv").config();
const express = require("express");
const app = express();
const fruitRouter = require("./routes/fruit");
const vegetableRouter = require("./routes/vegetable");
const nutRouter = require("./routes/nut");
const cookieRouter = require("./routes/cookie");
const categoryRouter = require("./routes/category");
const wishlistRouter = require("./routes/wishlist");
const ordersRouter = require("./routes/orders");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { User } = require("./models/user");
const publicKey = fs.readFileSync(path.resolve(__dirname, "./public.key"));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(process.env.STATIC_DIR));

const auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    console.log(token);
    var decoded = jwt.verify(token, publicKey);
    console.log(decoded);
    if (decoded.email) {
      next();
    } else {
      res.send("<h1>Invalid Token</h1>");
      // res.redirect("/login");
    }
  } catch (err) {
    res.json(err);
  }
};
app.use("/category", categoryRouter.router);
app.use("/collections/fruit", fruitRouter.router);
app.use("/collections/vegetable", vegetableRouter.router);
app.use("/collections/nut", nutRouter.router);
app.use("/collections/cookie", cookieRouter.router);
// protected resourses...
app.use("/user/wishlist", auth, wishlistRouter.router);
app.use("user/orders", auth, ordersRouter.router);
// authentication...
app.use("/auth", authRouter.router);
app.get("/verify", auth, (req, res) => {
  const token = req.get("Authorization").split(" ")[1];
  const user = User.findOne({ token: token });
  res.json(user);
});
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("server started at port", process.env.PORT);
});
