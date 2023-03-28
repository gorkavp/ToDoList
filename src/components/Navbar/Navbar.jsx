import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <p>To Do List App</p>
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="LogIn">
          <Button type="text">Log In</Button>
        </Link>
        <Link to="SignUp">
          <Button type="text">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
