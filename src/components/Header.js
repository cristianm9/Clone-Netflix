import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1200px-Netflix_2014_logo.svg.png"
            alt="Netflix"
          ></img>
        </a>
      </div>
      <div className="user--logo">
        <a href="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Usuário"
          ></img>
        </a>
      </div>
    </header>
  );
};
