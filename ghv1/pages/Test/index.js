import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import Modal from '../../Comps/Modal'

function Home(){
    const [showModal, setShowModal] = useState(false);
    
    return (<div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          Hello from the modal!
        </Modal>
    </div>)
}

export default Home;