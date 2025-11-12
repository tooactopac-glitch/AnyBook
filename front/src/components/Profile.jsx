import { IoLogoGithub } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa6";

export default function Profile() {
  return (
    <div className='profile-container'>
 

        {/* <div className='profile'>
            <div style={{position:'relative',backgroundColor:'red',height:'100%',gridRow:'1 / 3'}}>
                <img style={{height:'7rem',background:'rgba(255,255,255,0.2)',backdropFilter:'blur(1.5rem)',borderRadius:'50%',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',border: '7px solid transparent'}} src="https://randomuser.me/api/portraits/men/35.jpg" alt="img" />
                
                <div style={{backgroundImage:'url(data:image/webp;base64,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)',
                backgroundSize:'cover'
                ,height:'55%'
                ,backgroundPosition:'center'
                ,backgroundRepeat:'no-repeat'
                }}></div>
                <div style={{backgroundColor:"#fff",height:'45%', display: "flex",justifyContent: 'center',alignItems: 'center',flexDirection:'column'}}>
                    <p style={{fontFamily:'popinis',fontSize:'1.5rem',marginTop:'1.9rem'}}>Hamid El Mansouri</p>
                    <p>HamidElMansouri@gmail.com</p>
                    <div style={{backgroundColor:"#fefefeff",display: "flex",justifyContent: 'center',alignItems: 'center'}}>
                        209 Post | 192K Followers  | 2k Following
                        <br />
                    </div>
                </div>

            </div>
            <div style={{backgroundColor:'#ffffffff',height:'100%',textAlign:'center'}}>
                <span style={{borderTop:'1.5px solid #333',display:'block',paddingTop:'10px',margin:'0 auto',width:'50%',textAlign:'center'}}>About me</span>
                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptas quisquam odit iusto debitis amet aperiam autem voluptatibus minus. Lorem ipsum dolor sit amet.</small>


                <p style={{marginTop:'0.7rem'}}>Follow me on</p>
                <div style={{width:'25%',margin:'1rem auto',display:'flex',justifyContent:"space-around",alignItems:'center'}}>
                    <IoLogoGithub size="20"/>
                    <GrLinkedin/>
                    <FaGitlab/>
                </div>


            </div>
        </div> */}




<div className="profile">
      <div className="profile-top">
        <img
          className="profile-img"
          src="https://randomuser.me/api/portraits/men/35.jpg"
          alt="img"
        />

        <div className="profile-banner"></div>

        <div className="profile-info">
          <p className="profile-name">Hamid El Mansouri</p>
          <p>HamidElMansouri@gmail.com</p>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          voluptas quisquam odit iusto debitis amet aperiam autem voluptatibus
          minus. Lorem ipsum dolor sit amet.
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
  )
}
