import React from "react";

export default function Banner() {
  // Inline styles to avoid external CSS modules and ensure the DOM contains a real <img>
  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "48vh", // tall banner covering top area; adjust as needed
    minHeight: 280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#000", // fallback color while image loads
    color: "#fff",
  };

  const imgStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    // keep it in the accessibility tree (visible to screen readers)
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))", // subtle dark overlay to improve text contrast
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 20px",
    maxWidth: 1100,
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "2rem",
    lineHeight: 1.05,
    fontWeight: 700,
  };

  const subtitleStyle: React.CSSProperties = {
    marginTop: 8,
    fontSize: "1rem",
    opacity: 0.95,
  };

  // Image path uses public folder; adjust filename if necessary
  const imageSrc = "/images/banquet-hall.jpg";

  return (
    <div style={containerStyle} role="banner" aria-label="Main banner">
      {/* A real <img> so tests (queryByRole('img')) will find it and for accessibility */}
      <img src={imageSrc} alt="Banner image" style={imgStyle} />

      {/* Overlay to ensure readable text on top of the image */}
      <div style={overlayStyle} />

      <div style={contentStyle}>
        <h1 style={titleStyle}>where every event finds its venue</h1>
        <p style={subtitleStyle}>
          Finding the perfect venue has never been easier —
          บริการสถานที่จัดเลี้ยงครบวงจร
        </p>
      </div>
    </div>
  );
}
