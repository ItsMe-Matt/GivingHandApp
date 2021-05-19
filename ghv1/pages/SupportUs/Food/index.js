import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import TopNavUI from '../../../Comps/TopNavUI'
import Modal from '../../../Comps/Modal'

import styles from '../../../styles/supportUs.module.css'

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs/Sector" />
       <SupportUs 
       header="Support Us"
       subheader="Donation Type: Time"
       infoheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       
        
    
       

       <button 
        className={styles.supportBtn}
        onClick={() => setShowModal(true)}
        >Helping Families in Need Society</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <p>
          We’re a small group of dedicated volunteers who, for the last 38 years, have been picking up and distributing used household items to single Moms and Dads in need.

          We work with over 85 community, government and charitable organizations to directly help more than 1,300 families each year. Our community stretches across the Lower Mainland.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/OverlayFood1" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal(true)}
        >Greater Vancouver Food bank</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <p>
          We’re a small group of dedicated volunteers who, for the last 38 years, have been picking up and distributing used household items to single Moms and Dads in need.

          We work with over 85 community, government and charitable organizations to directly help more than 1,300 families each year. Our community stretches across the Lower Mainland.
          </p>
          <br></br>
          <ButtonUI  title= "Select" type="start" routeTo="/ThankYou2" />
        </Modal>




       <ButtonUI  title= "Quest Food Exchange" type="shadow" routeTo="/OverlayFood3" />
       <ButtonUI  title= "Aboriginal Front Door Society" type="shadow" routeTo="/OverlayFood4" />
    </div>
  </div>

    
  )
  }

export default Home;