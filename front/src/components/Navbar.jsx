import { useContext,useEffect,useState } from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import { CiDark,CiLight } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext";
import { IoSettingsSharp,IoChatbox } from "react-icons/io5";
import {
  FaHome,
  FaVideo,
  FaUserFriends,
  FaChat
} from "react-icons/fa";
import { FaClapperboard, FaRegSquarePlus, FaSquarePlus, FaUserGroup } from "react-icons/fa6";
import { MyContext } from "../context";


const navigation = [
  { name: "Home", href: "/home", current: true, icon: <FaHome className="link-icon"/> },
  { name: "Reels", href: "#", current: false, icon: <FaClapperboard className="link-icon"/> },
  { name: "Groups", href: "#", current: false, icon: <FaUserGroup className="link-icon"/> },
  { name: "Video", href: "#", current: false, icon: <FaVideo className="link-icon"/> },
];

export default function Navbar({iorsb,iolsb,iolsbValue,iorsbValue}) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [user,setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { BASE_URL,token } = useContext(MyContext);
  

  const isProfilePage = location.pathname === "/home/profile";
  const isSettingsPage = location.pathname === "/home/settings";

  useEffect(() => {
    const fetchMyData = async () => {
      const res = await fetch(`${BASE_URL}/api/get-mydata-profile`,
        {
          method: "post",
          headers: {
            "Authorization":`bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      const r = await res.json();
      setUser(r.mydata);
  }
    fetchMyData();
  }, [])
  


  const handleProfileClick = () => {
    if (isProfilePage) {
      navigate("/home"); 
    } else {
      navigate("/home/profile/me"); 
    }
  };
  const handleSettingsClick = ()=>{
    if(isSettingsPage){
      navigate("/home")
    }else{
      navigate("/home/settings")
    }
  }
  

    const handleOpenCreatePost = ()=>{
    if(isSettingsPage){
      navigate("/home")
    }else{
      navigate("/home/createPost")
    }
  }

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth >= 768) setIsOpen(false);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     handleResize();
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  return (
    <nav className="home-nav">
      <h2 className="nav-logo">AnyBook</h2>

      <div className="nav-link-items">
        {navigation.map((link, k) => (
          <div key={k} className="link-item">
            <Link className="link" to={link.href}>
              {link.icon} <span className="link-name">{link.name}</span> 
            </Link>
          </div>
        ))}
         <FaUserFriends
          className="contacts-suggfriends"
          size="25"
          onClick={() => iorsb(iorsbValue ? false : true)}
          title="Suggested Friends"
        />
       <IoChatbox
          className="contacts-suggfriends"
          size="25"
          onClick={() => iolsb(iolsbValue ? false : true)}
          title="Contacts"
        />

      </div>

      <div className="nav-info">
        {/* none on Mobile */}
        <div className="dark-light-icons">
          <CiDark
          className="dark"
          style={{ display: theme ? "inline" : "none" }}
          size="25"
          onClick={() => setTheme(false)}
        />
        <CiLight
          className="light"
          style={{ display: theme ? "none" : "inline" }}
          size="25"
          onClick={() => setTheme(true)}
        />
      
        </div>

       {/* on Pc */}
        <FaRegSquarePlus size="23" onClick={handleOpenCreatePost}/>
        <IoSettingsSharp size="25" className="settings-icon" onClick={handleSettingsClick}/>
        <img
          className="nav-img"
          src={`${BASE_URL}${user?.avatar}`}
          alt="alt"
          onClick={handleProfileClick}
        />

      </div>

      {/* MOBILE */}

      {/* <div className="bottom-nav">
        <CiDark
          className="dark"
          style={{ display: theme ? "inline" : "none" }}
          onClick={() => setTheme(false)}
        />
        <CiLight
          className="light"
          style={{ display: theme ? "none" : "inline" }}
          onClick={() => setTheme(true)}
        />
        <IoSettingsSharp
          size="25"
          className="settings-icon"
          onClick={() => (iopValue ? iop(false) : iop(true))}
        />
        <IoIosContact
          size="30"
          title="Contacts"
        />
      </div> */}
    </nav>
  );
}