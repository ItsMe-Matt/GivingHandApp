import { useState } from "react";
import UnopDropdown from "unop-react-dropdown";
import './testing.module.css';

export default () => {
  Headers="something";
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
      fontSize: 16,
    }}>{Headers}</button>}
    
  >
    <ul
      style={{
        backgroundColor: 'lightgrey',
        borderRadius: '10px',
        border:"white 2px solid",
        height: '80px',
        padding: '1px',
        margin: '1px',
        width: '325px',
        justifyContent: 'center',
        alignContent: 'center',
        position: "absolute",
        right: -165,
        textAlign: 'left',
      }}
    >
      <div>
       address="1679 Gilmore Ave, Burnaby, BC V5C 5V9"
       status="24 hours"
       <br></br>
       status2="(604) 294-3087"
      </div> 
     
      
        
    </ul>
  </UnopDropdown>
</div>
  );
};



