import Direction from "./site/components/direction/Direction";
import Header from "./site/components/header/Header";
import Proximity from "./site/components/proximity/Proximity";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <Proximity />
      <Direction />
    </div>
  );
}

export default App;
