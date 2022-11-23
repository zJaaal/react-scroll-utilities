import Direction from "./site/components/direction/Direction";
import Dynamic from "./site/components/dynamic/Dynamic";
import Footer from "./site/components/footer/Footer";
import Header from "./site/components/header/Header";
import LinearValue from "./site/components/linearValue/LinearValue";
import Proximity from "./site/components/proximity/Proximity";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <Proximity />
      <Direction />
      <Dynamic />
      <LinearValue />
      <Footer />
    </div>
  );
}

export default App;
