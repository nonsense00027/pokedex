import React from "react";

function Loading() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen grid place-items-center bg-white bg-opacity-60 cursor-progress">
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_iwmd6pyr.json"
        background="transparent"
        speed="1"
        style={{ height: 40, width: 40 }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Loading;
