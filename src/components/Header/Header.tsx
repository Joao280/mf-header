import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "../Navbar/Navbar";

const history = createBrowserHistory();

const Header = () => {
  return (
    <>
      <Router history={history}>
        <NavBar></NavBar>
      </Router>
    </>
  );
};

export default Header;
