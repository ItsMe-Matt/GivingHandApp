import { useState } from "react";
import UnopDropdown from "unop-react-dropdown";

export default () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }}
>
  <UnopDropdown
    align="CENTER"
    trigger={<button style={{
      backgroundColor: '#4CAF50', /* Green */
      border: 'none',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16,
      transitionDuration: 0.4,
      cursor: 'pointer',
    }}>Big Brother Vancouver</button>}
  >
    <ul
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '10px 5px 10px #000000, -10px -5px 40 px #FFFFFF',
        boxSizing: 'content-box',
        height: '40px',
        padding: '20px',
        margin: '2px',
        width: '150px',
        justifyContent: 'center',
        h
      }}
    >
      <li>
        Location: 
      </li>
      <li>
        Hours:
      </li>
      <li>
        Phone:
      </li>
    </ul>
  </UnopDropdown>
</div>
  );
};