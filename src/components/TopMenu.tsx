import React from "react";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end", 
        borderBottom: "1px solid #ccc",
        boxSizing: "border-box"
      }}
    >

      <TopMenuItem title="Booking" pageRef="/booking" />

      <div
        style={{
          height: "100%",
          width: "150px", 
          backgroundColor: "#f5ecd8", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid #ccc",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ maxHeight: "80%", maxWidth: "80%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}