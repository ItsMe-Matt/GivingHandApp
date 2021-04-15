import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function ButtonUI({
  }){
     return <button style={{
      width: 283,
      height: 111,
      left: 46,
      top: 231,
      background: "grey",
      borderRadius: 150
     }} >
       <h3>Time (Volunteer)</h3>
       <p>Here you are able to giver up your time for </p>
     </button>
  }
