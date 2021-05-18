import UnopDropdown from "unop-react-dropdown";



<UnopDropdown trigger={<button>Click</button>}>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</UnopDropdown>

<UnopDropdown
  onAppear={handler}
  onDisappearStart={handler}
  trigger={<button className="AnimatedDropdownButton">Hover</button>}
  delay={300}
  align="CENTER"
  hover
>
  <div>I am random</div>
  <div>I am random</div>
  <div>I am random</div>
</UnopDropdown>