import {useRef} from "react";
import './styles/App.scss';
import Header from "./components/Header";
import BoxListTop from "./components/Main/BoxListTop";
import BoxListBottom from "./components/Main/BoxListBottom";

function App() {

  const pageRef = useRef(null)

  return (
    <div className="App" ref={pageRef}>
      <Header pageRef={pageRef}/>
      <main>
        <div className="wrapper">
          <BoxListTop/>
          <BoxListBottom/>
        </div>
      </main>
    </div>
  );
}

export default App;
