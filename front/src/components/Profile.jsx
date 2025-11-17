import { IoLogoGithub } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { FaGitlab, FaSpinner } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { MyContext } from "../context";
import { useContext,useState,useEffect } from "react";
import { useParams } from "react-router-dom";



export default function Profile() {
  const { BASE_URL,token } = useContext(MyContext);
  const [user,setUser] = useState(null);
  const {id} = useParams();
  // const token = localStorage.getItem('token');

 useEffect(() => {
   
  const fetchData = async () => {
        try {
          const res = await fetch(`${BASE_URL}/api/${id == "me" ? 'get-mydata-profile' : 'get-data-user'}`,{
              method: "post",
              headers: {
                "Authorization":`bearer ${token}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ iduser : id ,token})
            }
          );
          const usr = await res.json();
          setUser(id == "me" ? usr.mydata : usr);
        } catch (error) {
          console.log('FETCH ERROR : ',error)
        }
  }

  fetchData()
   
 }, [])

 if(!user) return (<div className="profile-container">
    <div style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:"center"}}>
<FaSpinner className="spinner"/>
    </div>
 </div>)
 
  
  return (
    <div className="profile-container">


      <div className="profile">
        <div className="profile-top">
          <div className="profile-img">
            <img
              src={user.avatar != "" ? `${BASE_URL}${user?.avatar}` : 'logo192.png'}
              alt="img"
            />
            <FaCamera size="20" className="change-image"/>
          </div>

          <div className="profile-banner"></div>

          <div className="profile-info">
            <p className="profile-name">{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
            <div className="profile-stats">
              209 Post | 192K Followers | 2k Following
              <br />
            </div>
          </div>
        </div>

        <div className="profile-bottom">
          <hr />

          <span className="about-title">About me</span>
          <small>
            {user.bio}
          </small>

          <p className="follow-text">Follow me on</p>
          <div className="socials">
            <IoLogoGithub size="20" />
            <GrLinkedin />
            <FaGitlab />
          </div>
        </div>
      </div>
    </div>
  );
}
