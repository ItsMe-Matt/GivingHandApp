import styles from './support.module.css'
import styled from 'styled-components'

const Box1 = styled.div`
border: 1px solid #DFDFDF;
min-width: 50px;
background-color: ${props=>props.boxC1};
`
const Box2 = styled.div`
border: 1px solid #DFDFDF;
min-width: 50px;
background-color: ${props=>props.boxC2};
`
const Box3 = styled.div`
border: 1px solid #DFDFDF;
min-width: 50px;
background-color: ${props=>props.boxC3};
`
const Box4 = styled.div`
border: 1px solid #DFDFDF;
min-width: 50px;
background-color: ${props=>props.boxC4};
`
const Box5 = styled.div`
border: 1px solid #DFDFDF;
min-width: 50px;
background-color: ${props=>props.boxC5};
`




function SupportUI({
  header="Support Us",
  subheader="",
  supportingtext="",
  infoheader="",
  boxC1="#DFDFDF",
  boxC2="#DFDFDF",
  boxC3="#DFDFDF",
  boxC4="#DFDFDF",
  boxC5="red",
  page="FirstSupport"
}){
  if (page=="FirstSupport") {
    return <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <div className={styles.bar}>
        <Box1 boxC1="#C4C4C4"/>
        <Box2 boxC2="#FFFFFF"/>
        <Box3 boxC3="#FFFFFF"/>
        <Box4 boxC4="#FFFFFF"/>
        <Box5 boxC5="#FFFFFF"/>
    </div> 
        <div className={styles.h2}>{subheader}</div>
        <div className={styles.info}>{infoheader}</div>
        <div className={styles.h3}>{supportingtext}</div>
   </div>
  }
  else if (page=="SecondSupport") {
    return <div className={styles.container}>
    <div className={styles.header}>{header}</div>
    <div className={styles.bar}>
      <Box1 boxC1="#C4C4C4"/>
      <Box2 boxC2="#C4C4C4"/>
      <Box3 boxC3="#FFFFFF"/>
      <Box4 boxC4="#FFFFFF"/>
      <Box5 boxC5="#FFFFFF"/>
    </div> 
    <div className={styles.h2}>{subheader}</div>
    <div className={styles.info}>{infoheader}</div>
      <div className={styles.h3}>{supportingtext}</div>
    </div>
  }
  else if (page=="ThirdSupport") {
    return <div className={styles.container}>
    <div className={styles.header}>{header}</div>
    <div className={styles.bar}>
      <Box1 boxC1="#C4C4C4"/>
      <Box2 boxC2="#C4C4C4"/>
      <Box3 boxC3="#C4C4C4"/>
      <Box4 boxC4="#FFFFFF"/>
      <Box5 boxC5="#FFFFFF"/>
    </div> 
    <div className={styles.h2}>{subheader}</div>
    <div className={styles.info}>{infoheader}</div>
      <div className={styles.h3}>{supportingtext}</div>
    </div>
  }
  else if (page=="FourthSupport") {
    return <div className={styles.container}>
    <div className={styles.header}>{header}</div>
    <div className={styles.bar}>
      <Box1 boxC1="#C4C4C4"/>
      <Box2 boxC2="#C4C4C4"/>
      <Box3 boxC3="#C4C4C4"/>
      <Box4 boxC4="#C4C4C4"/>
      <Box5 boxC5="#FFFFFF"/>
    </div> 
    <div className={styles.h2}>{subheader}</div>
    <div className={styles.info}>{infoheader}</div>
      <div className={styles.h3}>{supportingtext}</div>
    </div>
  }
  else if (page=="FifthSupport") {
    return <div className={styles.container}>
    <div className={styles.header}>{header}</div>
    <div className={styles.bar}>
      <Box1 boxC1="#C4C4C4"/>
      <Box2 boxC2="#C4C4C4"/>
      <Box3 boxC3="#C4C4C4"/>
      <Box4 boxC4="#C4C4C4"/>
      <Box5 boxC5="#C4C4C4"/>
    </div> 
    <div className={styles.h2}>{subheader}</div>
    <div className={styles.info}>{infoheader}</div>
      <div className={styles.h3}>{supportingtext}</div>
    </div>
  }
}


export default SupportUI;