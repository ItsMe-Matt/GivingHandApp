import Hook from '../../Comps/ButtonTest/index'

function Home() {
    return (<div className={styles.main}>
      <div className={styles.landingPage}>
  
  
        <br></br>
        <br></br>
        <br></br>
        <Image src="/static/logo.png" width="171px" height="131px" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div className={styles.caption}>
          Helping, providing for, and nuturing the homeless.
        </div>
        <ButtonUI title="Our Mission" type="start" routeTo="/OurMission" />
  
        <ButtonUI title="Let's Get Started" type="mission" routeTo="/SupportUs" />
  
  
      </div>
      
    </div>
  
  
    )
    }
  
  export default Home;