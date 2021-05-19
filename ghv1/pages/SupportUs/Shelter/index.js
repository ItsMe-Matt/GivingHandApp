import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/supportUs.module.css'
import Modal from '../../../Comps/Modal'
import TopNavUI from '../../../Comps/TopNavUI'


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
        >Covenant House Vancouver</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <p
          className={styles.popP}
          >
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou13" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal(true)}
        >Aboriginal Shelter Vancouver</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <p
          className={styles.popP}
          >
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou14" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal(true)}
        >Lookout Emergency Aid</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <p
          className={styles.popP}
          >
          </p>
          <br></br>
          <ButtonUI title="Select" type="start" routeTo="/ThankYou15" />
        </Modal>

        <button 
        className={styles.supportBtn}
        onClick={() => setShowModal(true)}
        >Raincity Housing & Support Society</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
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