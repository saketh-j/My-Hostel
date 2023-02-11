import { useRef ,useEffect,useState} from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import Attendance from "./Components/Attendance";
import { LogIn,LoginDetails  } from "./Redux/Actions";


const Login = () => {
  const attendance = useNavigate();
  const dashboard = useNavigate();
  const dispatch = useDispatch();

  const [login,setLogin] = useState(false);
  const email = useRef("");
  const password = useRef("");

   useEffect(()=>{
       console.log(loginDetails)
   },[login])
  const signUpData = useSelector((state) => state.signInReducer);
  console.log(signUpData)

  const data = useSelector((state) => state.userDetailsReducer);
  console.log(data)
  const loginDetails = useSelector((state) => state.loginReducer);
  console.log(data);
  const userdata = {
    Name: "",
    Email: email.current.value,
    LoggedIn: "True"
  };

  const handler = () => {
    if (
      email.current.value === "saketh@gmail.com" &&
      password.current.value === "Saketh@1234"
    ) {
   //  dashboard(`/dashboard/${email.current.value}`);
     const userdata = {
      Name: "Saketh",
      Email: email.current.value,
      LoggedIn: "True"
    };
     dispatch(LoginDetails(userdata))
     //dashboard("/dashboard/:")
     alert("Please Go to Dahsboard")
     setLogin((login)=>
          login!==login

     )
     
    }
    const filtered = signUpData.filter((each) => {
      if (email.current.value === "" && password.current.value === "") {
        alert("Please enter your details");
      }
     else if (
        each.Email === email.current.value &&
        each.Password === password.current.value
      ) {
        const userdata = {
            Name: each.Name,
            Email: email.current.value,
            LoggedIn: "True"
          };
        //console.log("logged");
         dispatch(LogIn(userdata))
         dispatch(LoginDetails (userdata))
        attendance(`/attendance/name:${email.current.value}`);
      }
    });
  };
  return (
    <div className="login">
      <img src="https://img.freepik.com/free-vector/college-student-dorm-interior-young-travelers-stopping-hostel-vector-illustration-alternative-accommodation-backpackers-house-trip-concept_74855-13027.jpg?size=626&ext=jpg" />
      <div className="login-inputs">
        <h1>Login</h1>
        <input type="email" name="email" ref={email} placeholder="Email" />
        <input type="password" name="password" ref={password} placeholder="Password" />
        <input type="submit" onClick={handler} />
      </div>
    </div>
  );
};
export default Login;