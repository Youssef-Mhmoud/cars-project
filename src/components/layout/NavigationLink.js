import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, hashSection, sectionName, classActive }) => {
  const reachSectionHandler = (hashSection) => {
    window.location.replace(`#${hashSection}`);
  };

  return (
    <li>
      <NavLink
        to={to}
        onClick={() => {
          reachSectionHandler(hashSection);
        }}
        className={({ isActive }) => (isActive ? classActive : "")}
        end
      >
        {sectionName}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
