let dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/auth");
const passportSetup = require("./passport");
const session = require("express-session");




const app = express();

app.use(cookieSession({
    name: "session",
    keys:["cyberwolve"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: "GET,PUT,POST,DELETE",
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log(`Server running on port  + ${port}`);
    }
);