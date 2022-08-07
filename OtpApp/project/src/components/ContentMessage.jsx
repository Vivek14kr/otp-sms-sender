import React from "react";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import { deepOrange, deepPurple } from "@mui/material/colors";
import { useAuth } from "../contexts/ParentState";
import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

function ContentMessage() {
  let [receiverMob, setReceiverMob] = useState("");

  const { selectedId, setSelectedID, num, setMessagebox, messagebox } =
    useAuth();
  const handleClick = () => {
    console.log("new ");

    setReceiverMob(selectedId[0].Contact);

    fetch("https://otpsenderr.herokuapp.com/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: selectedId[0].Contact,
        body: `Your OTp is ${num}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, " message");
      });

    let name = `${selectedId[0].Name} ${selectedId[0].Surname}`;

    let obj = {
      Name: name,
      OTP: num,
    };

    let newbox = messagebox;

    newbox.push(obj);

    setMessagebox(newbox);
  };

  return (
    <div>
      <h1 style={{ color: "#1565C0", fontSize: "50px" }}>Message</h1>

      <div
        style={{
          height: "400px",
          width: "400px",

          margin: "auto",
          border: "5px solid #1565C0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "fitcontent",
            backgroundColor: "#1565C0",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h2 style={{ color: "white" }}>
            {" "}
            {`${selectedId[0].Name} ${selectedId[0].Surname}`}
          </h2>
        </div>
        <Avatar
          style={{
            backgroundColor: "#1565C0",
            margin: "auto",
            marginTop: "50px",
            height: "100px",
            width: "100px",
            fontSize: "30px",
          }}
        >
          {selectedId[0].Name[0]}
        </Avatar>
        <div style={{ display: "flex" }}>
          <TextField
            style={{ width: "70%", marginTop: "100px" }}
            id="outlined-read-only-input"
            label="Message"
            defaultValue={`Hi! Your OTP is: ${num}`}
            InputProps={{
              readOnly: true,
            }}
          />

          <Button
            style={{ width: "30%", marginTop: "100px" }}
            variant="contained"
            onClick={handleClick}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContentMessage;
