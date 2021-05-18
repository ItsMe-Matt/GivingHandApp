import { useState } from "react";
import "./app.module.css";
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
      delay={0.5}
      align="LEFT"
      
      
    >
      <div
        className={`AnimatedDropdownStyles openAnimation${
          !open ? " closeAnimation" : ""
          
        }`}
      >
        <div1>
          <h2 style={{
            color: "red"
        
        }}>Location:</h2>
          <p>soomting</p>
          </div1>
        <div1><h2>Hours:</h2></div1>
        <div1><h2>Phone:</h2></div1>
      </div>
    </UnopDropdown>
  );
};