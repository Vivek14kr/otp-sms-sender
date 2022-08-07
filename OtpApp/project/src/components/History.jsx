import React, { useEffect } from "react";
import { useAuth } from "../contexts/ParentState";
export default function History() {
  const { messagebox } = useAuth();

  useEffect(() => {
    console.log(messagebox, " dddd");
  }, []);
  return (
    <div>
      <h1
        style={{
          borderBottom: "5px solid #1565C0",
          width: "fit-content",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Message History
      </h1>

      {messagebox.length > 0 ? (
        <div>
          {messagebox.map((item) => (
            <div>
              <b>Name</b> : {item.Name}
              <br />
              <b>OTP Sent</b> : {item.OTP}
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div> No Entry</div>
      )}
    </div>
  );
}
