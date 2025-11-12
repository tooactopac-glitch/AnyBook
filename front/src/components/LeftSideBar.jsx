import { GrClose } from "react-icons/gr";

export default function ({isOpenL,setIsOpenL,contacts}) {
  return (
    <>
    <div className={`home-lsb${isOpenL ? " open" : ""}`}>
                <div className="contacts">
                    <div className="contact-suggFriends-header">
                       <h3 className="suggestions-title">Your Contacts</h3>
                        <GrClose className="rightleft-sidebare-close-btn" onClick={()=>setIsOpenL(false)}/>
                    </div>

                    {
                        contacts.map((contact,k)=>{
                            return (
                                <div key={k} className="contact-item">
                                    <img src={contact.avatar || "logo192.png"} alt={ contact.name ||"inknown"} className="contact-avatar" />
                                    <div className="contact-info">
                                        <span className="contact-name">{contact.name || "inknown"}</span>
                                        <span className="contact-status online">{contact.status}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="see-all-link">
                      <a href="#">See All Contacts</a>
                    </div>


                </div>
            </div>
    </>
  )
}
