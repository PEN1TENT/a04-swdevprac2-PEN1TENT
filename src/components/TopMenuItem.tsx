import Link from "next/link";
import React from "react";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 30px",
        height: "100%",
        textDecoration: "none",
        color: "#555",
        fontWeight: "bold",
        backgroundColor: "#d9d9d9", 
        borderLeft: "1px solid #ccc",
      }}
    >
      {title}
    </Link>
  );
}