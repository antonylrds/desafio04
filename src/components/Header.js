import React from "react";
import userCircle from "../assets/user-circle.png";

function Header() {
  return (
    <div className="header">
      <div>
        <div className="logo">
          <h1>facebook</h1>
        </div>
        <div className="perfil">
          <div>
            <span>Meu Perfil &nbsp; &nbsp;</span>
            <span>
              <img className="logo-icon" src={userCircle} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
