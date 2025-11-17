import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";
import {  FaDropbox, FaEllipsisH, FaRegComment, FaRegThumbsUp, FaRemoveFormat, FaShareAlt, FaThumbsUp, FaTrash } from "react-icons/fa";
import {  useNavigate, useOutletContext } from "react-router-dom";



export default function Post({postData,k,setPosts ,index}) {
    const {BASE_URL,token} = useContext(MyContext)
    const [like, setLike] = useState(postData.myReaction);
    const [likeCount, setLikeCount] = useState(postData.likesCount);
    const [commentsCount, setCommentsCount] = useState(postData.commentsCount);

    const [showComments, setShowComments] = useState(false);
    const [currentUser,setCurrentUser] = useState(null)
    const [commentText, setCommentText] = useState(""); 
    const navigate = useNavigate()

    const [comments,setComments] = useState([]);

    const fetchCommentData = async () => {
        const res = await fetch(`${BASE_URL}/api/get-comment`,
            {
            method: "post",
            headers: {
                "Authorization":`bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ post:postData._id})
            }
        );
        const r = await res.json();
        setCurrentUser(r.user)
        setComments(r.comments);
    }

    useEffect(()=>{
        fetchCommentData()
    },[])



    const fetchConatactData = async () => {
        const res = await fetch(`${BASE_URL}/api/set-post-like`,
            {
            method: "post",
            headers: {
                "Authorization":`bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postID:postData._id})
            }
        );
        const r = await res.json();
        console.log(r);
    }


    const handelSetLike = () => {
        const newLike = !like;

        setLike(newLike);
        setLikeCount(prev => prev + (newLike ? +1 : -1));


        setPosts(prev => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                myReaction: newLike,
                likesCount: updated[index].likesCount + (newLike ? +1 : -1)
            };
            return updated;
        });

        fetchConatactData();
    };


    const handleShowReactions = ()=>{
        navigate(`/home/reactions/${postData._id}`)
    } 


    const handleAddComment = async () => {
        if (!commentText.trim()) return;


        const res = await fetch(`${BASE_URL}/api/add-comment`, {
            method: "POST",
            headers: {
            "Authorization": `bearer ${token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            post: postData._id,
            content: commentText,
            }),
        });

        const newComment = await res.json();
        setPosts(prev => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                commentsCount: updated[index].commentsCount + 1
            };
            return updated;
        });

        setCommentsCount(prev => prev + 1);
        setComments(prev => [...prev, newComment]);
        setCommentText(""); 
    };

    return (
            <div className="postcard">
                {/* Header */}
                <div className="post-header">
                    <img src={postData.user.avatar || "logo192.png"} alt={postData.user.username} className="profile-pic" />
                    <div className="user-info">
                        <h3 className="username">{postData.user.username}</h3>
                        <p className="post-time">{new Date(postData.create_date).toLocaleString()}<span className="location">ifrane, Morroco</span></p>
                    </div >
                    {/* More ... */}
                    <div className="dropdown">
                        <button className="dropbtn" >
                            <FaEllipsisH />
                        </button>

                    <div className="dropdown-content">
                        <p className="action" style={{color:'red'}}>Remove <FaTrash size="15"/></p>
                    </div>
                    </div>


                </div>
  
                {/* Content */}
                <div className="post-content">
                    <p>{postData.content}</p>
                </div>
  
                {/* Image */}
                <div className="post-image">
                {
                    postData.path != "" ? <img src={`${BASE_URL}${postData.path}`} alt="image" /> : ""
                }
                                  
                </div>
  
                {/* Engagement */}
                <div className="engagement-bar">
                <div className="reactions-engagement" onClick={handleShowReactions}>
                    <FaThumbsUp/>
                    <span className="count" >{likeCount}</span>
                </div>
                <div className="comments-shares">
                    <span>{commentsCount} Comments</span>&nbsp;
                    <span>{postData.sharesCount} Shares</span>
                </div>
                </div>
  
                <div className="divider"></div>
  
                {/* Actions */}
                <div className="action-buttons">
                    <div className="action-btn" onClick={handelSetLike}>
                        {like ? <FaThumbsUp  /> : <FaRegThumbsUp  />} 
                        Like
                    </div>

                    <div className="action-btn" onClick={() => setShowComments(!showComments)}>
                        <FaRegComment /> 
                        Comment
                    </div>
                    {/* <button className="action-btn"><FaRegComment /> Comment</button> */}
                    <button className="action-btn"><FaShareAlt/>Share</button>
                </div>


                {/* Comments box */}
                {showComments && (
                <div className="comments-box">
                    <div className="comment-input-post">
                    <input 
                        className="comment-input"
                        type="text"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button onClick={() => handleAddComment()}>Post</button>
                    </div>

                    <div className="comments-list">
                    {comments.map((c,k) => (
                        <div className="single-comment" key={k}>
                        <img className="comment-img" src={c.user.avatar != "" ? `${BASE_URL}${c.user.avatar}` : "logo192.png"} alt="img" />
                        <b>{c.user.username}</b>: {c.content}
                        </div>
                    ))}
                    </div>
                </div>
                )}


            </div>
  
    )
}
