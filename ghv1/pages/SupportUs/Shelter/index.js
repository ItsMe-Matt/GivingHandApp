import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/supportUs.module.css'
import Modal from '../../../Comps/Modal'
import Modal2 from '../../../Comps/Modal2'
import Modal3 from '../../../Comps/Modal3'
import Modal4 from '../../../Comps/Modal4'
import TopNavUI from '../../../Comps/TopNavUI'


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
        >Covenant House Vancouver</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <img src="/static/CovenantHouse.png" width="100%"></img>
          <p
          className={styles.popP}
          >
            We help young people aged 16 to 24 who have fled physical, emotional and sexual abuse; those who have been forced from their homes; and those who have aged out of foster care.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou13" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal2(true)}
        >Aboriginal Shelter Vancouver</button>
        <Modal
          onClose={() => setShowModal2(false)}
          show={showModal2}
        >
          <img src="/static/Aboriginal.png" width="100%"></img>
          <p
          className={styles.popP}
          >
            VAFCS is a charitable organization and emphasizes the philosophies and values of varied Aboriginal culture and traditions.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou14" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal3(true)}
        >Lookout Emergency Aid</button>
        <Modal
          onClose={() => setShowModal3(false)}
          show={showModal3}
        >
          <img src="/static/Lookout.png" width="100%"></img>
          <p
          className={styles.popP}
          >
            We provide housing and a range of support services to adults with low or no income who have few, if any, housing or support options. Because the people we serve have challenges meeting basic needs and goals, we place minimal barriers between them and our services.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou15" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal4(true)}
        >Raincity Housing & Support Society</button>
        <Modal
          onClose={() => setShowModal4(false)}
          show={showModal4}
        >
          <img src="/static/Raincity.png" width="100%"></img>
          <p
          className={styles.popP}
          >
          A home for every person' is a lofty goal. We believe it is 100% achievable and benefits all of us. And we are confident that if we all work together, we can achieve this goal sooner than we ever thought possible.
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou16" />
        </Modal>
    
    </div>
  </div>

    
  )
  }

export default Home;