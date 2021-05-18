import styles from '../../styles/styles.module.css'
import style from '../../styles/ourMission.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>unop-react-dropdown</h1>
      </header>
      <div>
        <h3>Default dropdown</h3>
        <UnopDropdown trigger={<button>Big Brother</button>}>
          <div>Hour: 9am-5pm</div>
          <div>Location: Yo Mama</div>
          <div>Number: 69696969696</div>
        </UnopDropdown>
      </div>

      <div style={{ marginTop: "120px" }}>
        <h3>With custom css</h3>
        <AnimatedDropdown />
      </div>
    </div>
  );
}
