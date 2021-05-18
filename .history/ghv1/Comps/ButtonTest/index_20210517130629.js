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
      align="LEFT"
      
    >
      <div
        className={`AnimatedDropdownStyles openAnimation${
          !open ? " closeAnimation" : ""
        }`}
      >
        <div>Location</div>
        <div>Hours</div>
        <div>Phone</div>
      </div>
    </UnopDropdown>
  );
};