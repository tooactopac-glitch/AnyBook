import { GrClose } from "react-icons/gr";
import { MyContext } from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ isOpenL, setIsOpenL, contacts }) {
    const { BASE_URL } = useContext(MyContext);
    const navigate = useNavigate();


    const handleProfileClick = async(currentuserID) => {
        navigate(`/home/profile/${currentuserID}`); 
    };
    
    return (
        <>
            <div className={`home-lsb${isOpenL ? " open" : ""}`}>
                <div className="contacts">
                    <div className="contact-suggFriends-header">
                        <h3 className="suggestions-title">Your Contacts</h3>
                        <GrClose className="rightleft-sidebare-close-btn" onClick={() => setIsOpenL(false)} />
                    </div>

                    {contacts.length > 0 ?
                        contacts.map((contact, k) => {
                            return (
                                <div key={k} className="contact-item">
                                    <img src={`${BASE_URL}${contact.avatar}` || "logo192.png"} alt={contact.name || "inknown"} className="contact-avatar" onClick={()=>handleProfileClick(contact._id)}/>
                                    <div className="contact-info">
                                        <span className="contact-name">{contact.first_name + " " + contact.last_name || "inknown"}</span>
                                        <span className="contact-status online">{contact.status}</span>
                                    </div>
                                </div>
                            )
                        })
                        : <small>You do not have Contacts</small>
                    }

                    <div className="see-all-link">
                        <a href="#">See All Contacts</a>
                    </div>


                </div>
            </div>
        </>
    )
}
