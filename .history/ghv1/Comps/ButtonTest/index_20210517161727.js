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
      padding:'15px',
      borderRadius: '10px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      boxShadow:'10 20 20 ',
      fontSize: 16,
    }}>Big Brother Vancouver</button>}
  >
    <ul
      style={{
        backgroundColor: 'lightgrey',
        borderRadius: '10px',
        border:"white 2px solid",
        height: '80px',
        padding: '1px',
        margin: '2px',
        width: '325px',
        justifyContent: 'center',
        alignContent: 'center',
        position: "absolute",
        right: -165,
        textAlign: 'left',
      }}
    >
      <p>I dont know</p>
        
    </ul>
  </UnopDropdown>
</div>
  );
};



