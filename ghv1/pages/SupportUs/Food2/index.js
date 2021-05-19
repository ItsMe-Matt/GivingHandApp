import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/supportUs.module.css'
import TopNavUI from '../../../Comps/TopNavUI'
import Image from '../../../Comps/Image'

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
       
       <button 
        className={styles.supportBtn}
        onClick={() => setShowModal(true)}
        >Helping Families in <br /> Need Society</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <Image 
            src="/static/HelpingFamilies.png"
            width="100%"
            height="100%"
          />
          <p className={styles.popP}>
          We’re a small group of dedicated volunteers who, for the last 38 years, have been picking up and distributing used household items to single Moms and Dads in need.

          We work with over 85 community, government and charitable organizations to directly help more than 1,300 families each year. Our community stretches across the Lower Mainland.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal2(true)}
        >Greater Vancouver Food <br/> Bank</button>
        <Modal2
          onClose={() => setShowModal2(false)}
          show={showModal2}
        >

          <Image 
            src="/static/GreaterVancouver.png"
            width="100%"
            height="100%"
          />
          <p className={styles.popP}>
          The Greater Vancouver Food Bank was set up as a temporary relief to the hunger crisis in 1983 and has grown significantly in the three decades since then.
          Today the GVFB provides assistance to around 8,500 individuals and families monthly across Vancouver, Burnaby, New Westminster, and the North Shore.
          </p>
          <br></br>
          <ButtonUI  title= "Select" type="start" routeTo="/ThankYou2" />
        </Modal2>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal3(true)}
        >Quest Food Exchange</button>
        <Modal3
          onClose={() => setShowModal3(false)}
          show={showModal3}
        >
          <Image 
            src="/static/QuestFood.png"
            width="100%"
            height="100%"
          />
          <p className={styles.popP}>
          Quest’s Food Recovery and Redistribution model is an innovative idea in which Quest recovers quality surplus food and necessities from suppliers at all levels of the supply chain and redistributes these goods to clients of social service agencies, government and non-government programs, churches, schools and hospitals in a traditional grocery market setting
          </p>
          <br></br>
          <ButtonUI  title= "Select" type="start" routeTo="/ThankYou3" />
        </Modal3>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal4(true)}
        >Aboriginal Front Door <br />Society</button>
        <Modal4
          onClose={() => setShowModal4(false)}
          show={showModal4}
        >
           <Image 
            src="/static/FrontDoor.png"
            width="100%"
            height="100%"
           />

          <p className={styles.popP}>
          The Vision of Aboriginal Front Door Society is composed of Aboriginal people that are able to walk through life with love, honor, respect, and compassion for all things in creation, including themselves.
          </p>
          <br></br>
          <ButtonUI  title= "Select" type="start" routeTo="/ThankYou4" />
        </Modal4>
    </div>
  </div>

    
  )
  }

export default Home;