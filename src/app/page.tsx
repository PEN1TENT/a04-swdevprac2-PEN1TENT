import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "32px 16px",
    boxSizing: "border-box",
  };

  const mainStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  // สร้าง Style บังคับให้เรียงแนวนอน
  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // ดันให้ซ้าย กลาง ขวา ห่างกันพอดี
    gap: "20px", // ช่องว่างระหว่างการ์ด
    width: "100%",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Banner on top */}
      <Banner />

      <main style={mainStyle}>
        <div style={containerStyle}>
          <section aria-label="Featured venues">
            
            {/* กล่อง Flex แนวนอน */}
            <div style={rowStyle}>
              <Card 
                venueName="The Bloom Pavilion" 
                imgSrc="/images/bloom.jpg" 
              />
              <Card 
                venueName="Spark Space" 
                imgSrc="/images/sparkspace.jpg" 
              />
              <Card 
                venueName="The Grand Table" 
                imgSrc="/images/grandtable.jpg" 
              />
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}