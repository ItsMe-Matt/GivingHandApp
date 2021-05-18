import styles from './testButton.module.css'

function TestButtonUI({ 
}){

    return <button classname={styles.body}>
        <div classname={styles.glow-on-hover}</div>
        
    </button>
  }
  

  export default TestButtonUI;