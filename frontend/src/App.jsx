import List from "./components/List";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="App">
      <div className="container m-auto mt-8">
        <AddItem />
        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
