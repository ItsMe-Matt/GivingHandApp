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
      border: 'solid white',
      color: 'white',
      padding:'5px',
      borderRadius: '10px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16,
    }}>Big Brother Vancouver</button>}
  >
    <ul
      style={{
        backgroundColor: 'lightgrey',
        borderRadius: '10px',
        boxShadow: '10px 5px 10px #000000, -10px -5px 10 px #000000',
        boxSizing: 'content-box',
        height: '40px',
        padding: '20px',
        margin: '2px',
        width: '150px',
        justifyContent: 'center',
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