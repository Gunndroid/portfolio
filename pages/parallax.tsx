/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import "../app/globals.css";
// import ClickImageComponent from "@/pages/clicks";
import Modal from "@/components/modalMailbox";
import WorksModal from "@/components/worksModal";

export default function Parallax() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isWorksModalOpen, setIsWorksModalOpen] = useState<boolean>(false);

  const [textIndex, setTextIndex] = useState<number>(0);
  const [aboutIndex, setAboutIndex] = useState<number>(0);
  const [aboutTextOpacity, setAboutTextOpacity] = useState<number>(1);

  const [textOpacity, setTextOpacity] = useState<number>(1);

  const [cloudPosition, setCloudPosition] = useState<string>("100%");
  const [grassPosition, setGrassPosition] = useState<string>("100%");
  const [housePosition, setHousePosition] = useState<string>("100%");
  const [foregroundPosition, setForegroundPosition] = useState<string>("100%");
  const [removing, setRemoving] = useState<boolean>(false);

  const skills = [
    "/icons/html.png",
    "/icons/css4.png",
    "/icons/js.png",
    "/icons/Tailwind.svg",
    "/icons/react.png",
    "/icons/git.png",
    "/icons/github.png",
    "/icons/node.png",
    "/icons/WordPress.com-Logo2.png",
    // "/icons/vscode.png",
    "/icons/solidity.svg",
  ];
  const [clickedSkills, setClickedSkills] = useState<
    { x: number; y: number; skill: number }[]
  >([]);

  // Inside the handleClickOnMessageBoard function, add this condition
  const handleClickOnMessageBoard = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    // Check if the new click is close to an existing clicked position
    const isNearExistingClick = clickedSkills.some(
      (click) => Math.abs(click.x - x) < 10 && Math.abs(click.y - y) < 10
    );

    // If near an existing click and we are in adding phase, return early
    if (isNearExistingClick && !removing) return;

    if (removing) {
      // If in removing phase, remove an image
      setClickedSkills((prevSkills) => prevSkills.slice(0, -1));

      // If all images are removed, switch back to adding phase
      if (clickedSkills.length === 1) {
        setRemoving(false);
      }
    } else {
      // In adding phase, add an image
      setClickedSkills((prevSkills) => [
        ...prevSkills,
        { x, y, skill: prevSkills.length % skills.length },
      ]);

      // If all images are placed, switch to removing phase
      if (clickedSkills.length === skills.length - 1) {
        setRemoving(true);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const openWorksModal = () => {
  //   console.log("openWorksModal called");
  //   setIsWorksModalOpen(true);
  // };

  const closeWorksModal = () => {
    setIsWorksModalOpen(false);
  };

  const toggleWorksModal = () => {
    console.log("toggleWorksModal called");
    setIsWorksModalOpen((prevValue) => !prevValue); // Toggle the state
  };

  // ...

  <div
    style={{
      position: "fixed",
      top: `calc(${housePosition} + 50px)`,
      left: "200px",
      width: "150px",
      height: "180px",
      cursor: "pointer",
      // backgroundColor: "red",
      zIndex: 10,
    }}
    onClick={toggleWorksModal} // Use the updated function name here
  />;

  const text = "Welcome to my portfolio";
  const aboutText =
    "Welcome to my home, my portfolio. \n Please explore and get to know about me.";

  const welcomeText = text.slice(0, textIndex);
  const visibleAboutText = aboutText.slice(0, aboutIndex); // New visible text

  // function to handle scroll
  const handleScroll = () => {
    const newScrollPosition = window.scrollY;
    const newLetterIndex = Math.max(
      Math.floor((newScrollPosition - 100) / 60),
      0
    );

    // After the text has been written out, start decreasing its opacity
    if (newLetterIndex >= text.length) {
      const newOpacity = Math.max(1 - (newScrollPosition - 1000) / 500, 0); // Adjust these values as necessary
      setTextOpacity(newOpacity);
    }

    setTextIndex(newLetterIndex);

    // ---------- Images -------------//
    if (newScrollPosition > 2000) {
      setCloudPosition(
        `${Math.max(0, 100 - (newScrollPosition - 2000) * 0.05)}%`
      );
    }

    if (newScrollPosition > 2700) {
      setGrassPosition(
        `${Math.max(0, 100 - (newScrollPosition - 2500) * 0.05)}%`
      );
    }

    if (newScrollPosition > 3000) {
      setForegroundPosition(
        `${Math.max(0, 100 - (newScrollPosition - 3000) * 0.05)}%`
      );
    }

    if (newScrollPosition > 3200) {
      setHousePosition(
        `${Math.max(0, 100 - (newScrollPosition - 3200) * 0.05)}%`
      );
    }

    if (newScrollPosition > 5500) {
      const newAboutIndex = Math.max(
        Math.min(Math.floor((newScrollPosition - 5500) / 30), aboutText.length),
        0
      ); // Adjust this value to control the speed of typing
      setAboutIndex(newAboutIndex);
    }
  };

  useEffect(() => {
    if (aboutIndex === aboutText.length) {
      const timeout = setTimeout(() => {
        setAboutTextOpacity(0);
      }, 3000); // 3 seconds

      return () => clearTimeout(timeout); // Cleanup to prevent issues if the component unmounts
    }
  }, [aboutIndex, aboutText.length]);

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ minHeight: "1200vh" }}></div>
      {/* Welcome Text */}
      <h1
        style={{
          position: "fixed",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: textOpacity, // apply the opacity here
          transition: "opacity 1s ease", // add a smooth transition effect
          zIndex: 5, // make sure the text is above the background
          fontFamily: "Pacifico, cursive",
          color: "white",
          fontSize: "34px",
        }}
      >
        {welcomeText}
      </h1>
      {/* Bio Text */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          right: "13%",
          width: "500px",
          height: "100px",
          zIndex: 5,
          fontFamily: "Pacifico, cursive",
          color: "#414141",
          opacity: aboutTextOpacity, // Apply the opacity here
          transition: "opacity 1s ease", // Smooth transition effect

          fontSize: "26px",
        }}
      >
        {visibleAboutText.split("\n").map((line, index) => (
          <p key={index} style={{ margin: 0 }}>
            {line}
          </p>
        ))}{" "}
      </div>
      {/* Clouds */}
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          //   left: cloudPosition,
          transform: `translateX(${cloudPosition})`, // Use transform translateX instead of left

          zIndex: 2,
          //   transition: " ease",
        }}
      >
        <img src="clouds.png" alt="Clouds Right" className="image100" />
      </div>
      {/* Grass */}
      <div
        style={{
          position: "fixed",
          top: grassPosition,
          zIndex: 3,
          //   transition: "1s ease",
        }}
      >
        <img src="grass.png" alt="Grass" className="image100" />
      </div>
      {/* House */}
      <div
        style={{
          position: "fixed",
          top: housePosition,
          zIndex: 2, // this stays the same
        }}
      >
        <img src="house.png" alt="House" className="image100" />
      </div>
      {/* Clickable Area for House */}
      <div
        style={{
          position: "fixed",
          top: `calc(${housePosition} + 50px)`, // Add an appropriate value here to position it lower than the house
          left: "200px", // Adjust this value to align horizontally with the house
          width: "150px",
          height: "180px",
          cursor: "pointer",
          // backgroundColor: "red",
          zIndex: 10,
        }}
        onClick={toggleWorksModal} // Use the updated function name here
      />
      {/* Foreground */}
      <div
        style={{
          position: "fixed",
          top: foregroundPosition,
          zIndex: 4,
        }}
      >
        <img src="foreground.png" alt="Foreground" className="image100" />
        {/* The Mailbox clickable area */}
        <div
          style={{
            position: "absolute",
            bottom: "39%", // Adjust these to match the position of the mailbox in the image
            left: "32%",
            width: "70px",
            height: "70px",
            cursor: "pointer",
            // backgroundColor: "red",
          }}
          onClick={openModal}
        />
        <div
          style={{
            position: "absolute", // or "absolute"
            bottom: "24%", // Adjust these to match the position of the mailbox in the image
            right: "14%",
            width: "13%",
            height: "18%",
            // backgroundColor: "red",
            cursor: "pointer", // Make it clear it's clickable
            zIndex: 3000,
            // styling for the message board
          }}
          onClick={handleClickOnMessageBoard} // Call the onClick handler
        >
          {clickedSkills.map(({ x, y, skill }, index) => (
            <img
              key={index}
              src={skills[skill]}
              alt="Current Skill"
              style={{
                position: "absolute",
                left: x - 20,
                top: y - 20,
                width: "40%",
                height: "40%",
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
      {/* Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(15, 166, 224)",
          transition: "background 1s ease",
          zIndex: 1, // this is lower than the text and the clouds
        }}
      ></div>
      {/* board */}
      {isModalOpen && <Modal onClose={closeModal} />}
      {isWorksModalOpen && <WorksModal onClose={closeWorksModal} />}{" "}
    </>
  );
}
