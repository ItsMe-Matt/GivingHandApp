import "../../Comps/ButtonTest/s";
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "./AnimatedDropdown";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>unop-react-dropdown</h1>
      </header>
      <div>
        <h3>Default dropdown</h3>
        <UnopDropdown trigger={<button>Click</button>}>
          <div>I am random</div>
          <div>I am random</div>
          <div>I am random</div>
        </UnopDropdown>
      </div>

      <div style={{ marginTop: "120px" }}>
        <h3>With custom css</h3>
        <AnimatedDropdown />
      </div>
    </div>
  );
}
