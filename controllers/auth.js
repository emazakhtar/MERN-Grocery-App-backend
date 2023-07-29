const model = require("../models/user");
const User = model.User;
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync(path.resolve(__dirname, "../private.key"));

exports.login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.password === req.body.password) {
        const token = jwt.sign(
          { email: req.body.email },
          privateKey,
          {
            algorithm: "RS256",
          },
          { expiresIn: "1h" }
        );

        user.token = token;
        const savedUser = await user.save();
        console.log(savedUser);
        res.json(savedUser);
        // const authorizationHeader = `Bearer ${token}`;
        // res.setHeader("Authorization", authorizationHeader);
      } else {
        res.send("<h1>wrong password</h1>");
      }
    } else {
      res.send("<h1>no user exists</h1>");
    }
  } catch (err) {
    res.send(err);
  }
};

exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const token = jwt.sign(
      { email: req.body.email },
      privateKey,
      {
        algorithm: "RS256",
      },
      { expiresIn: "1h" }
    );

    const user = new User(req.body);
    user.token = token;
    const savedUser = await user.save();
    // const authorizationHeader = `Bearer ${token}`;
    // res.headers.authorization = authorizationHeader;
    // res.setHeader("Authorization", authorizationHeader);
    res.json(savedUser);
    // res.sendFile(path.resolve(__dirname, "../build"));
  } catch (err) {
    res.send(err);
  }
};
