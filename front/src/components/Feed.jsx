import { SlLike } from "react-icons/sl";

export default function Feed({posts}) {
 
  return (
    <>
        <div className='home-main'>

                <div className="feed">

                 {
                    posts.map((postData,k)=>{
                        return (
                            <div className="postcard" key={k}>
                                {/* Header */}
                                <div className="post-header">
                                <img src={postData.post.user.profilePic} alt={postData.post.user.name} className="profile-pic" />
                                <div className="user-info">
                                    <h3 className="username">{postData.post.user.name}</h3>
                                    <p className="post-time">Just now • <span className="location">{postData.post.user.location}</span></p>
                                </div>
                                <button className="more-btn">...</button>
                                </div>

                                {/* Content */}
                                <div className="post-content">
                                <p dangerouslySetInnerHTML={{ __html: postData.post.content.text }} />
                                </div>

                                {/* Image */}
                                <div className="post-image">
                                {
                                    postData.post.content.image.src != "" ? <img src={postData.post.content.image.src} alt={postData.post.content.image.alt} /> : ""
                                }
                                
                                </div>

                                {/* Engagement */}
                                <div className="engagement-bar">
                                <div className="reactions">
                                    {postData.post.engagement.reactions.map((r, i) => (
                                        <SlLike key={i}/>
                                    ))}
                                    <span className="count">{postData.post.engagement.totalReactions}</span>
                                </div>
                                <div className="comments-shares">
                                    <span>{postData.post.engagement.comments} Comments</span>&nbsp;
                                    <span>{postData.post.engagement.shares} Shares</span>
                                </div>
                                </div>

                                <div className="divider"></div>

                                {/* Actions */}
                                <div className="action-buttons">
                                {postData.post.actions.map((action, i) => (
                                    <button key={i} className="action-btn">{action}</button>
                                ))}
                                </div>
                            </div>

                        )
                    })
                 }
                 
                    <footer className="site-footer">
                        <p className="copyright">
                            © 2025 AnyBook. All rights reserved.
                        </p>
                    </footer>
                </div>

            </div>
    </>
  )
}
