import styles from './button.module.css'

function UI({
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