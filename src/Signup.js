import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInInfo } from "./Redux/Actions";
import "./style.css";


const SignUp = () => {
  const adminData = {
    Name: "saketh",
    Email: "saketh@gmail.com",
    Password: "Saketh@1234"
  };

  localStorage.setItem("users", JSON.stringify([adminData]));
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const data = useSelector((state) => state.userDetailsReducer);
  const dispatch = useDispatch();
  const handler = () => {
    const userdata = {
      Name: name.current.value,
      Email: email.current.value,
      Password: password.current.value
    };
    if (email.current.value === "") {
      alert("plese enter your details");
    } else if (name.current.value === "") {
      alert("enter your name");
    } else if (password.current.value === "") {
      alert("enter your password");
    }

    //dispatch(adduser(userdata));
     dispatch(signInInfo(userdata))
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
   alert("SignUp Successful")
  };
  return (
    <div className="home">
      <img src="https://img.freepik.com/free-vector/college-student-dorm-interior-young-travelers-stopping-hostel-vector-illustration-alternative-accommodation-backpackers-house-trip-concept_74855-13027.jpg?size=626&ext=jpg" className="home_image" />
      <div className="signup">
        <h1>Sign up</h1>
        <input type="text" name="Name" required ref={name} placeholder="Name" />
        <input type="email" name="email" required ref={email} placeholder="Email"/>
        <input type="password" name="password" required ref={password} placeholder="Password" />
        <input type="submit" name="button" onClick={handler} placeholder="Name"/>
      </div>
    </div>
  );
};
export default SignUp;