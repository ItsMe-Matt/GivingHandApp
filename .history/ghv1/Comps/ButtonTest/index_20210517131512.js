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
      trigger={{"type":"button","key":null,"ref":null,"props":{"children":"click"},"_owner":null}}
      delay={400}
      align="CENTRE"
      
    >
      <div
        className={`AnimatedDropdownStyles openAnimation${
          !open ? " closeAnimation" : ""
        }`}
      >
        <div1><h1>Location:</h1></div1>
        <br></br>
        <div2>Hours:</div2>
        <br></br>
        <div3>Phone:</div3>
      </div>
    </UnopDropdown>
  );
};