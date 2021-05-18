import ButtonUI from '../../Comps/ButtonUI'
import SupportUs from '../../Comps/SupportUs/index'
import OrganizationCards from '../../Comps/OrganizationCards/index'
import TopNavUI from '../../Comps/TopNavUI'

import styles from '../../styles/organ.module.css'


function Home() {
  return (<div className={styles.organ}>
    <div className={styles.bg}>
      <div className={styles.overlay}>
       <div className={styles.OrganizationCards}>
           <OrganizationCards organizationText="We connect donors to local charitable organizations supporting those in need: families, seniors, homeless, people with disabilities/mental health issues, the most vulnerable as well as organizing food rescue projects that benefit local communities." supportText="" url="/static/DonationCircle.png" />
       </div>
       <TopNavUI routeTo="/SupportUs/Hygiene" />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       <ButtonUI title= "Donation Circle Society" type="shadow" />
       <ButtonUI  title= "Wish Drop in Centre" type="shadow" />
       <ButtonUI  title= "Directions Youth Services" type="shadow" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
      </div>
    </div>
  </div>

    
  )
  }

export default Home;