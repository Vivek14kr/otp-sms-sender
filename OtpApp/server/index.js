const express = require("express");
const cors = require("cors");
let app = express();
let PORT = process.env.PORT || 3010;

app.use(express.json());

app.use(cors());
const client = require("twilio")(
//  SDK-AC3ca0342db7a8e5a7a0ef06bba91288b9",
//   TOKEN-908395d839b460c8e9b3c8079dd35b45"
);

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: +17572738567,
      to: req.body.to,
      body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.get("/", (req, res) => {
  res.send("Heoooo");
});

app.listen(PORT, () => {
  console.log("Server running");
});
