import React from "react";
import "./Toppage.scss";
const name=['P','r','a','t','e','e','k','','k','u','m','a','r'];
const Toppage = () => {
  return (
    <div className="toppage">
      <div className="name_div">
        {name.map((char,index)=>{
          return <h3 key={index} className="char">{char}</h3>
        })}
      </div>
    </div>
  );
};

export default Toppage;
