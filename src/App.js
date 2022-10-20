import "./index.css";

import Card from "./components/Card";
//import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <ul className="class-list">
          <Card
            question="was?"
            answer="das"
            tag1="miau"
            tag2="wuff"
            tag3="pfeif"
          />
          <Card
            question="wer?"
            answer="sie"
            tag1="miau"
            tag2="wuff"
            tag3="pfeif"
          />
          <Card
            question="wie?"
            answer="so"
            tag1="miau"
            tag2="wuff"
            tag3="pfeif"
          />
        </ul>
      </main>
      {
        <footer>
          <Navigation />
        </footer>
      }
    </div>
  );
}

export default App;
