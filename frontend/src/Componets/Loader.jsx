import React from "react";
import loaderVideo from "../assets/loader-video.mp4" 

const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        className="w-48 h-48"
      ></video>
    </div>
  );
};

export default Loader;
