import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function ButtonUI({
  }){
     return <button style={{
      width: 300,
      height: 150,
      left: 46,
      top: 231,
      background: "grey",
      borderRadius: 150
     }} >
       <h3>Time (Volunteer)</h3>
       <p>Click here if you want to Volunteer and help the homeless</p>
     </button>
  }
