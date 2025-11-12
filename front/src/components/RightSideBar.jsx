import { GrClose } from "react-icons/gr";
import { LuPlus } from "react-icons/lu";
export default function RightSideBar({isOpenR,setIsOpenR,suggFriends}) {
  return (
    <>
      <div className={`home-rsb${isOpenR ? " open" : ""}`}>
                      <div className="suggested-friends">
                      
                      <div className="contact-suggFriends-header">
                          <h3 className="suggestions-title">People You May Know</h3>
                          <GrClose className="rightleft-sidebare-close-btn" onClick={()=>setIsOpenR(false)}/>
                      </div>
      
                      {
                        suggFriends.map((suggFriend,k)=>{
                            return (
                                <div key={k} className="friend-suggestion">
                                    <img src={ suggFriend.avatar || "logo192.png"} alt={ suggFriend.name || "unknown"} className="suggestion-avatar" />
                                    <div className="suggestion-info">
                                        <span className="suggestion-name">{suggFriend.name || "unkown"}</span>
                                        <span className="suggestion-meta">{suggFriend.meta || "3 mutual friends"}</span>
                                    </div>
                                    <button className="add-friend-btn"><LuPlus className="plus-icon"/></button>
                                </div>
                            )
                        })
                      }
      
      
                      <div className="see-all-link">
                      <a href="#">See All Suggestions</a>
                      </div>
                      </div>
                  </div>
    </>
  )
}
