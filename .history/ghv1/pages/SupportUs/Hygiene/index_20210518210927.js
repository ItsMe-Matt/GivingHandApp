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
        >Donation Circle Society</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <img src="/static/DonationCircle.png" style="text"></img>
          <p className={styles.popP}>
            We connect donors to local charitable organizations supporting those in need: 
            families, seniors, homeless, people with disabilities/mental health issues, the most vulnerable as well as 
            organizing food rescue projects that benefit local communities.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou5" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal2(true)}
        >Wish Drop In Centre</button>
        <Modal2
          onClose={() => setShowModal2(false)}
          show={showModal2}
        >
          <img src="/static/Wish.png"></img>
          <p className={styles.popP}>
          The Drop-In Centre is a safe, welcoming and non-judgemental space for all self-identified women, including trans women, who are current or former sex workers. 
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou6" />
        </Modal2>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal3(true)}
        >Directions Youth Services</button>
        <Modal3
          onClose={() => setShowModal3(false)}
          show={showModal3}
        >
          <img src="/static/Direction.png"></img>
          <p className={styles.popP}>
            Directions Youth Services (a division of Family Services of Greater Vancouver) offers low-barrier programs 
            and services to support youth under the age of 25 who are in crisis or experiencing homelessness as a result of abuse, 
            neglect, substance use, or mental health challenges. We welcome and serve all youth.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou7" />
        </Modal3>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal4(true)}
        >Union Gospel Misson</button>
        <Modal4
          onClose={() => setShowModal4(false)}
          show={showModal4}
        >
          <img src="/static/UnionGospel.png"></img>
          <p className={styles.popP}>
            In a world that’s broken by poverty and addiction, we are determined to offer restoration to those in need.
            We do this by coming alongside men, women, and children to provide a hand up towards hope and recovery.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou8" />
        </Modal4>

       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" routeTo="/OverlayClothing2" />
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" routeTo="/OverlayClothing3" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/OverlayClothing4" />
    </div>
  </div>

    
  )
  }

export default Home;