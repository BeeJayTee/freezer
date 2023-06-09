import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainContent from "./components/MainContent";
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
          <Route
            path="/signup"
            element={!user && userChecked ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user && userChecked ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              user && userChecked ? <MainContent /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
