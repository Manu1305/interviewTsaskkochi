import React from "react";
import realestate from '../Images/real-estate-house.png'
function Header() {
  return (
    <div className="h-16 w-full bg-gray-400 flex items-center">
      <div>
        <img src={realestate} className="h-32 w-32 sm:ml-9 xl:ml-40" alt="" />
      </div>
      <h1 className="text-center" style={{ marginLeft: "20%" }}>
        XYZ SYSTEMS LLP.
      </h1>
    </div>
  );
}

export default Header;
