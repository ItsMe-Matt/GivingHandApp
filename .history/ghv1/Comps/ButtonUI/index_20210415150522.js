import styles from './button.module.css'

function buttonUI({
  title="placeholdeText",
}){
    return <div className={styles.select} style={{
      userSelect: "none",
    }}
>
     
     {title}
   </div>
}


export default buttonUI;