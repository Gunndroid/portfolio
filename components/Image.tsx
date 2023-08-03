/* eslint-disable @next/next/no-img-element */
import React from "react";

const BackgroundImage = () => (
  <div className="relative w-full h-screen">
    <img
      src="/website8.png"
      alt="Description of Image"
      className="absolute inset-0 object-cover w-full h-full z-10"
    />
    <p className="absolute top-0 text-white z-20">
      This text should be on top of the image.
    </p>
  </div>
);

export default BackgroundImage;
