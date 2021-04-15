import styles from './button.module.css'

function buttonUI({
  title="placeholderText",
}){
    return <div className={styles.select}
>
     
     {title}
   </div>
}


export default buttonUI;