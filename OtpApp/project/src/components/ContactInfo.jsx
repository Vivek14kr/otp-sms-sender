import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useAuth } from "../contexts/ParentState";
import { useNavigate } from "react-router-dom";
function ContactInfo() {
  const navigate = useNavigate();
  const { selectedId, setSelectedID } = useAuth();
  console.log(selectedId, " fdfd");
  return (
    <div style={{ marginTop: "2%" }}>
      <b
        style={{
          backgroundColor: "#1565C0",
          color: "white",

          padding: "15px",
          borderRadius: "20px",
        }}
      >
        Contact Information
      </b>
      <Card sx={{ minWidth: 275, border: "1px solid blue", borderTop: "0px" }}>
        <CardContent>
          <div>
            <p>
              {" "}
              <b>Name: </b>
              {`${selectedId[0].Name} ${selectedId[0].Surname}`}
            </p>
            <p>
              {" "}
              <b>Contact: </b> {`${selectedId[0].Contact}`}
            </p>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/contactmessage");
            }}
          >
            {" "}
            Send Message
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactInfo;
