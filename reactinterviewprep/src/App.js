import logo from "./logo.svg";
import "./App.css";
import HigherOrder from "./Components/HOC/hoc";
import ChildToParent from "./Components/ChildToParent/ChildToParent";

function App() {
  return (
    <div>
      {/* <HigherOrder /> */}
      <ChildToParent />
    </div>
  );
}

export default App;
