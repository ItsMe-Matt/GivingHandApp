import { useState } from "react";
import "./styles.module.css";
import UnopDropdown from "unop-react-dropdown";

export default () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <UnopDropdown
      onAppear={handler}
      onDisappearStart={handler}
      trigger={<button className="AnimatedDropdownButton">Hover</button>}
      delay={400}
      align="LEFT"
      hover
    >
      <div
        className={`AnimatedDropdownStyles openAnimation${
          !open ? " closeAnimation" : ""
        }`}
      >
        <div>I am random</div>
        <div>I am random</div>
        <div>I am random</div>
      </div>
    </UnopDropdown>
  );
};