import { useRef ,useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInTime, addOutTime ,adduser} from "../Redux/Actions";



const Attendance = () => {
    const [checkin,setCheckin] =useState("False");
    const [checkInDate,setCheckInDate] =useState([]);
    const [checkInData,setCheckInData] =useState("");
    const usercheckin = useSelector(state=>state.addAttendanceDetails)
    //console.log(usercheckin)
    const userInfo = useSelector((state) => state.loginReducer);
    useEffect(()=>{
        //console.log(usercheckin)
        setCheckInData(usercheckin)
       // console.log(usercheckin)
        //console.log(userInfo)
    },[checkInData])

  const { name } = useParams();
  const home = useNavigate();
 // console.log(name);
  const userName = name.split(":")[1]
//console.log(userName)
  const data = useSelector((state) => state.addAttendanceDetails);
 // console.log(data)
 
  const actionDispatch = useDispatch();
 // console.log(data);
  const inDate =(e)=>{
   setCheckInDate(e.target.value)
  }
  const outDate = useRef("");
  let inTime;
  const timeHandler = (e) => {
    inTime = e.target.value;
  };

  const in_handler = () => {
    let user;
    // setCheckInDate(inDate.current.value)
    userInfo.filter((each)=>{
     if(each.Email===userName){
       // console.log(each.Name)
        user= {
            Name:each.Name,
            Email: each.Email,
            LoggedIn: "true",
            InDate:checkInDate,
            inTime:inTime
        }
       // console.log(user)
       // setCheckin("True")
     }
    })
    actionDispatch(addInTime(user));
    alert("Checkin Time Updated Successfully");
    setCheckInData((previous)=>{
        return [...previous,user]
    })
    actionDispatch(adduser(user))
   // home("/")
    //console.log(userCheckInTime);
  };
  const out_handler = () => {
   // console.log(checkInData)
   // localStorage.setItem("attendance",JSON.stringify([{}]))
    //  let attendanceDetails = localStorage.getItem("attendance")
     // let parseData = JSON.parse(attendanceDetails)
     // console.log(parseData)
     let user= checkInData.map((each)=>{
     if(each.Email===userName){
       // console.log(each.Name)
       return {
            Name:each.Name,
            Email: each.Email,
            LoggedIn:"True",
            inDate:each.InDate,
            outDate:outDate.current.value,
            inTime:each.inTime,
            outTime:inTime
        }
    
     }
    })
   // localStorage.setItem("attendance",JSON.stringify(user))
    actionDispatch(addOutTime(user));
    actionDispatch(adduser(user))
    alert("Checkout Time Updated Successfully");
    setCheckInData("")
    
//    localStorage.setItem("attdendance",JSON.stringify([...parseData,user]))
//     console.log(data)
    
//     console.log(userInfo)

  // console.log(user)
    //console.log(userCheckInTime);
  };
  return (
    <div>
        <p className="heading">Mark your Attendance</p>
      <div className="attendance">
        <div className="checkTimeandDate">
          <div className="checkTimeandDate">
            <p>Check-In</p>
            <input type="date" onChange={inDate}/>
            <input type="time" onChange={timeHandler} />
            <button type="submit" onClick={in_handler}  className="input-btn">Submit</button>
          </div>
          <div className="checkTimeandDate">
            <p>Check-Out</p>
            <input type="date" ref={outDate} />
            <input type="time" onChange={timeHandler} />
            <button type="submit" onClick={out_handler} className="input-btn">Submit</button>
          </div>
        </div>
      </div>
      <br />
          
       <div className="mess-img" style={{
                   backgroundSize:'cover',
                   backgroundImage: `url("https://iitram.ac.in/frontend/Student/Hostel/Meals_Timings.png")`,
                   backgroundPosition:"center",
       }}>
        
       </div>
    </div>
  );
};
export default Attendance;