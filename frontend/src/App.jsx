import List from "./components/List";
import AddItem from "./components/AddItem";

import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const size = useWindowSize();
  console.log(size);

  return (
    <div className="App">
      <div className="container m-auto mt-8">
        <AddItem size={size} />
        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
