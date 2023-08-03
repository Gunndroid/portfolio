import React from "react";
import Link from "next/link";

const WorksModal = ({ onClose }) => {
  const works = [
    {
      image: "/lbk2.png",
      description: "Lil Bird Kitchens",
      link: "https://lilbirdkitchens.com/",
    },
    {
      image: "/f1Cuts-race.png",
      description: "F1 Cuts",
      link: "https://www.f1cuts.com/",
    },
    {
      image: "/puffWizzLanding+Text.jpg",
      description: "PuffWizz NFT",
      link: "https://puffwizz-nft.vercel.app/",
    },
    {
      image: "/image4.jpg",
      description: "Matty Maha Coffee",
      link: "https://mattymahacoffee.com/",
    },
    {
      image: "/image5.jpg",
      description: "American RFID Solutions",
      link: "/project5",
    },
  ];

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
        zIndex: 2000,
        overflowY: "scroll", // To make sure all images fit and are scrollable
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
        <h2>My Works</h2>
        {works.map((work, index) => (
          <Link legacyBehavior href={work.link} key={index}>
            <a target="_blank" rel="noopener noreferrer">
              <img
                src={work.image}
                alt={`Work ${index + 1}`}
                style={{
                  width: "500px",
                  height: "80px",
                  border: "1px solid black",
                }}
              />
              <p style={{ fontStyle: "italic" }}>{work.description}</p>
            </a>
          </Link>
        ))}
        <button onClick={onClose} style={{ marginTop: "20px" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WorksModal;
