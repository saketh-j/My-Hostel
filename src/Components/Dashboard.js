import { useLayoutEffect } from "react";
import { useSelector} from "react-redux";
import Login from "../Login";
import { useNavigate,useParams } from "react-router-dom";
import { LogIn } from "../Redux/Actions";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';




const Dashboard = () => {
const Login = useNavigate();
const details = useSelector((state) => state.userDetailsReducer);
console.log(details.flat(1))
localStorage.setItem("attendance",JSON.stringify(details.flat(1)))
const loginInfo= useSelector((state) => state.loginReducer);
console.log(loginInfo)
const usercheckin = useSelector((state) => state.addAttendanceDetails);
//console.log(usercheckin);

   const randomNumber=()=>{
     return Math.random*10
   }

  return (
    <div>
      {
        loginInfo.length <= 0 ? <h1>Please Login</h1>:loginInfo.map((each)=>{
             if(each.Email==="saketh@gmail.com"){

                return details.flat(1).map((each)=>{
                      if(each.inTime !==""&&each.outTime!==""){
                        return <div key={randomNumber} >
                            {/* <p>Name:{each.Name}</p>  
                            <p>date:{each.inDate}</p>  
                            <p>Check-In-time:{each.inTime}</p> 
                            <p>Check-Out-Date:{each.outDate}</p>  
                            <p>Check-out-time:{each.outTime}</p>     */}
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Tenant Name</th>
          <th>Check-In-Date</th>
          <th>Check-In-Time</th>
          <th>Check-Out-Date</th>
          <th>Check-Out-Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{each.Name}</td>
          <td>{each.inDate}</td>
          <td>{each.inTime}</td>
          <td>{each.outDate}</td>
          <td>{each.outTime}</td>
        </tr>
       
       
      </tbody>
    </Table>
                        </div>
                      }
                })
             }else{
                return <h1 key={randomNumber}>You are not an Admin</h1>
             }
        })
      }

   
    
    </div>
  );
};

export default Dashboard;