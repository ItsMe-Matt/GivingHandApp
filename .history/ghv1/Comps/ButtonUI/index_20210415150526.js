import styles from './button.module.css'

function buttonUI({
  title="placeholderText",
}){
    return <div className={styles.select} style={{
      userSelect: "none",
    }}
>
     
     {title}
   </div>
}


export default buttonUI;