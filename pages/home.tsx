import React from "react";

import computerLogo from "../src/assets/computer.png";

const HomeMain: React.FC = () => {
  return (
    <div className="page-home">
      <div className="computer">
        <img src={computerLogo.src} alt="" />
      </div>

      <div className="bottom-ctrl">
        <p>PRESS TO START</p>
      </div>
    </div>
  );
};
export default HomeMain;
