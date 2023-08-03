import React from "react";

const Modal = ({ onClose }) => {
  const handleYesClick = () => {
    window.open("mailto:gunnlukari@gmail.com");
    onClose();
  };

  const handleNoClick = () => {
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        Let&apos;s bridge distances with an email,<br></br> shall we?
        <div
          style={{
            display: "flex",
            justifyContent: "center", // <-- Add this
            marginTop: "20px",
          }}
        >
          <button
            onClick={handleYesClick}
            style={{
              marginRight: "30px",
              backgroundColor: "#4CAF50" /* Green */,
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            style={{
              backgroundColor: "#f44336" /* Red */,
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
