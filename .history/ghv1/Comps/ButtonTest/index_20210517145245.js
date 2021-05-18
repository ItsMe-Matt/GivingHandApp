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
        border:"white 2px solid",
        boxShadow: '10px 5px 10px #000000, -10px -5px 10 px #000000',
        boxSizing: 'border-box',
        height: '80px',
        padding: '1px',
        margin: '2px',
        width: '350px',
        justifyContent: 'center',
        alignContent: 'center',
        position: "absolute",
        left: 5,
      }}
    >
      <li>
        Location: 1679 Gilmore Ave, Burnaby, BC V5C 5V9
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