import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ContactList } from "./Contactlist";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [btn1active, setBtn1active] = useState(false);
  const [btn2active, setBtn2active] = useState(false);

  const [btn1, setBtn1] = useState("outlined");
  const [btn2, setBtn2] = useState("outlined");
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <Typography variant="h2" component="p" gutterBottom>
        CONTACT APP
      </Typography>
      <CardContent>
        <Typography variant="b" component="b">
          MENU
        </Typography>
        <br />
        <Button
          variant={btn1}
          onClick={() => {
            if (btn2 == "contained") {
              setBtn2("outlined");
              setBtn2active(false);
            }
            setBtn1("contained");
            setBtn1active(true);
            navigate("/contact");
          }}
        >
          Contacts
        </Button>
        <Button
          variant={btn2}
          onClick={() => {
            if (btn1 == "contained") {
              setBtn1("outlined");
              setBtn1active(false);
            }
            setBtn2("contained");
            setBtn2active(true);
            navigate("/history");
          }}
        >
          History
        </Button>
      </CardContent>
    </Card>

    // </div>

    // </div>
  );
}

export default Home;
