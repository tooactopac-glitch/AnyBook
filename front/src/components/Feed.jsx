import { useOutletContext } from "react-router-dom";
import Post from "./Post";

export default function Feed() {
    const { posts, setPosts } = useOutletContext();

  return (
    <>
        <div className='home-main'>

                <div className="feed">

                 {posts.length > 0 ?
                    posts.map((postData,k)=>{
                        return <Post key={postData._id || k} postData={postData} index={k} setPosts={setPosts}  />;
                    })
                    :
                    <p style={{textAlign:"center",margin:"1rem"}}>There is no Posts yet 🧐</p>
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
