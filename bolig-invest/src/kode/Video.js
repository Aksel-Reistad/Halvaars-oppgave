import React from "react";

const VideoPlayer = ({ videoSrc, width = "640", height = "360" }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <video width={width} height={height} controls>
        <source src={videoSrc} type="video/mp4" />
        Din nettleser støtter ikke videoavspilling.
      </video>
    </div>
  );
};

export default VideoPlayer;
