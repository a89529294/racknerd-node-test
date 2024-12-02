const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

console.log(process.env.NODE_ENV);

const allowedOrigin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5500" // Development frontend URL
    : "https://a89529294.github.io"; // Production frontend URL

const corsOptions = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies
  preflightContinue: false,
  optionsSuccessStatus: 200, // For legacy browsers
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.get("/api/test", (req, res) => {
  res.send("Hello from the test endpoint!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
