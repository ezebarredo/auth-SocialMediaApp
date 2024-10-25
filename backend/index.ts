import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

//Authentication
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "1020304050";
const users: { username: any; password: any }[] = [];

// API SIGNUP POST
app.post("/api/user/signup", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
    console.log(users);
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

//TODO: API LOGIN POST
app.post("/api/user/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ user, token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
