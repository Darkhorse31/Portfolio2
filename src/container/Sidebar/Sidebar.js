import React from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_top" >
       <h3 className="name">Prateek</h3>
      </div>
      <div className="sidebar_bottom">
        <ul>
          <li>
            <a href="#" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
