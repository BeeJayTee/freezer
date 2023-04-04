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
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect, useState } from "react";

function App() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [userChecked, setUserChecked] = useState(null);

  useEffect(() => {
    setUserChecked(null);
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setTimeout(() => {
        setUserChecked(true);
      }, 100);
    } else {
      setUserChecked(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {user && userChecked && (
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
          )}
          {!user && userChecked && <Route path="/" element={<Login />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
