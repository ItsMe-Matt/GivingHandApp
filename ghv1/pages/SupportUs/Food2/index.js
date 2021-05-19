import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'
import TopNavUI from '../../../Comps/TopNavUI'

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Modal from '../../../Comps/Modal'
import Modal2 from '../../../Comps/Modal2'
import Modal3 from '../../../Comps/Modal3'
import Modal4 from '../../../Comps/Modal4'

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs/Sector2" />
       <SupportUs 
       header="Support Us"
       subheader="Donation Type: Money"
       infoheader="Which Organization would you like to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       
        
    
       <ButtonUI title= "Helping Families in Need Society" type="shadow" routeTo="/OverlayFood1" />
       <ButtonUI  title= "Greater Vancouver Food Bank" type="shadow" routeTo="/OverlayFood2" />
       <ButtonUI  title= "Quest Food Exchange" type="shadow" routeTo="/OverlayFood3" />
       <ButtonUI  title= "Aboriginal Front Door Society" type="shadow" routeTo="/OverlayFood4" />
       <br></br><br></br> 
       <ButtonUI title="Continue" type="start" routeTo="/ThankYou" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;