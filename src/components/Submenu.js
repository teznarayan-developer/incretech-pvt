import React from "react";
import { Link } from "react-router-dom";
import sublinks from "../newData";

const SubMenu = ({ setState, state }) => {
  const closeSubmenu = () => {
    setState(false);
  };
  return (
    <div className="submenu-container">
      {state &&
        sublinks.map((link, i) => (
          <div key={link.id} className="submenu-flex">
            <a 
              href={`/${link.link}`}
              className="sub-menu"
              onClick={closeSubmenu}
            >
              {link.name}
            </a>
          </div>
        ))}
    </div>
  );
};

export default SubMenu;
