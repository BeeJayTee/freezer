import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import List from "./components/List";
import AddItem from "./components/AddItem";
import Signup from "./pages/Signup";
import Login from "./pages/login";

import { useLogout } from "./hooks/useLogout";

function App() {
  const { logout } = useLogout();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <div className="container m-auto mt-4">
                <button className="ml-4 md:ml-0" onClick={(e) => logout()}>
                  Logout
                </button>
                <AddItem />
                <div>
                  <List />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
