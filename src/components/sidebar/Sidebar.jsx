import "./sidebar.scss"
import {Dashboard,PersonOutline,LocalShipping,CreditCard,
  Store,SettingsApplications,
  ExitToApp,NotificationsNone,SettingsSystemDaydreamOutlined,PsychologyOutlined,Inventory,AccountCircle} from '@mui/icons-material'
import {Link} from "react-router-dom"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none"}}>
        <span className="logo">FreeZone admin</span>
        </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
              <p className="title">MAIN</p>
               <li><Dashboard className="icon"/><span>Dashboard</span></li> 
               <p className="title">LISTS</p>
               <Link to="/users" style={{ textDecoration: "none"}}>
              <li><PersonOutline className="icon"/><span>Users</span></li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none"}}>
              <li><Inventory className="icon"/><span>Products</span></li> 
              </Link>
               <li><CreditCard className="icon"/><span>Orders</span></li>
               <li><LocalShipping className="icon"/><span>Delivery</span></li>
               <p className="title">USEFUL</p>

               <li><Store className="icon"/><span>Status</span></li> 
               <li><NotificationsNone className="icon"/><span> Notifications</span></li> 
               <p className="title">SERVICE</p>

               <li><SettingsSystemDaydreamOutlined className="icon"/><span>System Health</span></li> 
               <li><PsychologyOutlined className="icon"/><span>Logs</span></li> 
               <li><SettingsApplications className="icon"/><span>Settings</span></li> 
                <p className="title">USER</p>

               <li><AccountCircle className="icon"/><span>Profile</span></li> 
               <li><ExitToApp className="icon"/><span>Logout</span></li> 



            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}> </div>
          <div className="colorOption" onClick={() => dispatch({type:"DARK"})}> </div>


        </div>
      </div>
  )
}

export default Sidebar
