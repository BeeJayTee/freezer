import "./App.css";
import Blurb from "./components/Blurb";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Blurb />
      <Stats />
    </>
  );
}

export default App;
