import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/supportUs.module.css'
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
        >Dress for Success</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <img src="/static/Dress.png"></img>
          <p>
          Dress for Success Vancouver is a community empowering women into the workforce by providing them with professional attire, career services, and skills development programs.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou5" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal2(true)}
        >Dress for Success</button>
        <Modal2
          onClose={() => setShowModal2(false)}
          show={showModal2}
        >
          <img src="/static/Dress.png"></img>
          <p>
          milk
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou6" />
        </Modal2>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal3(true)}
        >Dress for Success</button>
        <Modal3
          onClose={() => setShowModal3(false)}
          show={showModal3}
        >
          <img src="/static/Dress.png"></img>
          <p>
          hi hi
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou10" />
        </Modal3>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal4(true)}
        >Dress for Success</button>
        <Modal4
          onClose={() => setShowModal4(false)}
          show={showModal4}
        >
          <img src="/static/Dress.png"></img>
          <p>
          hi hi
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou10" />
        </Modal4>

       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" routeTo="/OverlayClothing2" />
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" routeTo="/OverlayClothing3" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/OverlayClothing4" />
    </div>
  </div>

    
  )
  }

export default Home;