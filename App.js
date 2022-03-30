import "./App.css";

// import Props from "./components/Props";
import Props1 from "./components/Props1";
function App() {
  return (
    <div className="App">
      {/* <Props name="props data " /> */}

      <h1>we can pass any data from parent to child component</h1>
      <Props1 name="Ruchi Gour" id="12345" phone="2222222" city="Bhopal" />
      <Props1 name="dolly" id="44444" phone="2222222" city="Balaghat" />
      <Props1 name="suraj" id="12345" phone="3333" city="Lucknow" />
      <Props1 name="Roshni" id="12345" phone="33333333" city="Indore" />
      <Props1 name="arrti " id="12345" phone="99999" city="Indore" />
    </div>
  );
}

export default App;
