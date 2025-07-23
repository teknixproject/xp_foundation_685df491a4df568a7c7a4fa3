import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a", // 🔥 Change this color
        color: "#fff", // White text for contrast
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="text-[3rem] max-sm:text-[1rem]">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
