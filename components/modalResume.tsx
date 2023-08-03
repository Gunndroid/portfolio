import React from "react";

const ResumeModal = ({ onClose }) => {
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
        background: "rgba(0, 0, 0, 0.7)",
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
        Here is my resume:
        <br></br>
        <img src="path_to_your_resume.jpg" alt="Resume" width="100%" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ResumeModal;
