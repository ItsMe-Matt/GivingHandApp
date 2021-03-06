import styles from './support.module.css'
import styled from 'styled-components';

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
  boxC1="#DFDFDF",
  boxC2="#DFDFDF",
  boxC3="#DFDFDF",
  boxC4="#DFDFDF",
  boxC5="red"
}){
    return <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <div className={styles.bar}>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
    </div> 
        <div className={styles.h2}>{subheader}</div>
        <div className={styles.h3}>{supportingtext}</div>
   </div>
}


export default SupportUI;