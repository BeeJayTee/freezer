import AddItem from "./AddItem";
import List from "./List";

import { useLogout } from "../hooks/useLogout";

const MainContent = () => {
  const { logout } = useLogout();
  return (
    <div className="container m-auto mt-4">
      <button className="ml-4 md:ml-0" onClick={(e) => logout()}>
        Logout
      </button>
      <AddItem />
      <div>
        <List />
      </div>
    </div>
  );
};

export default MainContent;
