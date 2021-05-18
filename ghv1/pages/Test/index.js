import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import Modal from '../../Comps/Modal'

import Image from '../../Comps/Image'

import ButtonUI from '../../Comps/ButtonUI'
import Demo from '../../Comps/Demo'



export default function Home() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <div>
          <button onClick={() => setShowModal(true)}>Open Modal</button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            Hello from the modal!
            Giving hand is fun
            <ButtonUI routeTo="/" />
            <Image />
            
          </Modal>

          <button onClick={() => setShowModal(true)}>Open Modal</button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            Hello from the modal!
            Giving hand is fun
            <ButtonUI routeTo="/" />
            <Image />
            <Demo />
          </Modal>




      </div>
    )
  }