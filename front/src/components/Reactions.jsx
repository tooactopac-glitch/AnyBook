import {  useNavigate, useParams } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight, FaMagento, FaMagnifyingGlass, FaThumbsUp } from 'react-icons/fa6' 
import { useContext,useEffect, useState } from 'react';
import { MyContext } from "../context";


export default function Reactions() {
    const navigate = useNavigate();
    const { BASE_URL,token } = useContext(MyContext);
    const [reactions,setReactions] = useState([])
    const {postid} = useParams();
        
    const fetchReactions = async () => {
        const res = await fetch(`${BASE_URL}/api/get-my-reactions`,
            {
            method: "post",
            headers: {
                "Authorization":`bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postID:postid})
            }
        );
        const r = await res.json();
        setReactions(r);
    }

    useEffect(() => {
      
        fetchReactions()
        
    }, [])
    

    
    const handleGoBack = ()=>{
        navigate('/home')
    }
    

    console.log(reactions)
  return (
    <div className='reactions-container'>
        
        <div className='reactions'>
           
            <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:'.7rem',borderBottom:"1px solid black"}}>
                <FaAngleLeft onClick={handleGoBack}/>
                <h3>Reactions</h3>
                <FaMagnifyingGlass/>
            </header>
            <main>

                {
                    reactions.length > 0 ? 
                    
                        reactions.map((reaction,k)=>{
                            return ( <div key={k} style={{marginTop:'1rem',padding:".5rem",display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid gray'}}>

                                <img src={reaction.user.avatar || "logo192.png"} alt="avatar" style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'red'}}/>
                                <span>{reaction.user.username}</span>
                                <FaThumbsUp/>

                            </div>)
                        })
                    
                    :
                    'no one'
                }
            </main>


        </div>

    </div>
  )
}
