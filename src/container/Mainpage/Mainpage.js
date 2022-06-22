import React from "react";
import "./Main.scss";
import { gsap } from "gsap";
import Toppage from "./1page/Toppage";
const Mainpage = () => {
  const Heading = React.createRef();
  React.useEffect(() => {
    gsap.to(Heading.current, {
      color: "#390e8f",
      opacity: "1",
      duration: "3",
    });
  }, [Heading]);
  return (
    <div className="main_page">
      <Toppage/>
    </div>
  );
};

export default Mainpage;
