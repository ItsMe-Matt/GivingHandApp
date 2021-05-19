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
          <img src="/static/Dress.png" width="100%"></img>
          <p className={styles.popP}>
          Dress for Success Vancouver is a community empowering women into the workforce by providing them with professional attire, career services, and skills development programs.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou9" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal2(true)}
        >Big Brothers Vancouver</button>
        <Modal2
          onClose={() => setShowModal2(false)}
          show={showModal2}
        >
          <img src="/static/BigBrother.png" width="100%"></img>
          <p className={styles.popP}>
          Big Brothers belong in the Greater Vancouver area. Their mission is to enable impactful mentoring relationships where children and youth can discover their power and potential, in collaboration with our local communities.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou10" />
        </Modal2>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal3(true)}
        >Downtown Eastside Women’s Centre</button>
        <Modal3
          onClose={() => setShowModal3(false)}
          show={showModal3}
        >
          <img src="/static/DowntownEastside.png" width="100%"></img>
          <p className={styles.popP}>
          The mission of the Downtown Eastside Women’s Centre is to provide a safe, non-judgmental environment for women from all walks of life, who live and/or work in the Downtown Eastside. To achieve this goal, the Centre provides supportive surroundings with meals, counseling, advocacy and programs which nurture and empower members.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou11" />
        </Modal3>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal4(true)}
        >Union Gospel Mission</button>
        <Modal4
          onClose={() => setShowModal4(false)}
          show={showModal4}
        >
          <img src="/static/UnionGospel.png" width="100%"></img>
          <p className={styles.popP}>
          In a world that’s broken by poverty and addiction, we are determined to offer restoration to those in need. We do this by coming alongside men, women, and children to provide a hand up towards hope and recovery.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou12" />
        </Modal4>
    </div>
  </div>

    
  )
  }

export default Home;