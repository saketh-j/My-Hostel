import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style.css";
import Logo from "../Components/Logo.png"
const Navigation = () => {
    const loginDetails = useSelector((state)=>
    state.addAttendanceDetails
    )
  //  console.log()
  return (
    <div className="navigation">
      <img src={Logo} className="logo" />
      <div className="navigation-items">
        <Link to="/" className="nav-items">
          signup
        </Link>
        <Link to="/dashboard/:" className="nav-items">
          dashboard
        </Link>  
        <Link to="/Login" className="nav-items">
          Login
        </Link>
        <Link to="/Login" className="nav-items">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navigation;