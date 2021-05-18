import { useState } from "react";
import styles from "./button.module.css";
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
          !open ? " closeAnimation" : "hi"
        }`}
      >
        <div1><h2>Location:</h2></div1>
        <br></br>
        <div1><h2>Hours:</h2></div1>
        <br></br>
        <div1><h2>Phone:</h2></div1>
      </div>
    </UnopDropdown>
  );
};