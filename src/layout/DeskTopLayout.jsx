import React from "react";
import { useLocation } from "react-router-dom";

export default function DeskTopLayout(props) {
  const location = useLocation();
  return (
    <div
      style={{
        backgroundColor: "#F5F7FA",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1170px",
          margin: "auto",
          height: "auto",
        }}
      >
        <div style={{ width: "100%", marginTop: "7rem" }}>{props.children}</div>
      </div>
    </div>
  );
}
