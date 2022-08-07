import { useEffect, useState } from "react";
import "./Contactlist.css";
import data from "../data.json";
import { useAuth } from "../contexts/ParentState";
import { useNavigate } from "react-router-dom";
export const ContactList = () => {
  const { selectedId, setSelectedID, num, setNum } = useAuth();

  const [dataa, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUnique();
    setData(data);
  }, []);

  const getUnique = () => {
    let k = Math.floor(Math.random() * 90000) + 100000;
    console.log(k);
    setNum(k);
  };
  const handleClick = (idd) => {
    let k = dataa.filter((item) => item.id == idd);
    setSelectedID(k);
    navigate("/contactinfo");
  };

  return (
    <div
      style={{
        border: "5px solid #1565C0",
        marginTop: "30px",
        marginBottom: "20px",
        borderRadius: "20px",
        width: "40%",
        margin: "auto",
        padding: "40px",
      }}
    >
      <b style={{ color: "#1565C0", fontSize: "50px" }}>Contact List</b>
      <div>
        {dataa.map((item) => (
          <div
            className="namebox"
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <h1 style={{ color: "white" }}>
              {item.Name} {item.Surname}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
