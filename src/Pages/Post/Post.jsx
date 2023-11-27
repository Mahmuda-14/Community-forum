import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Post = () => {
    const [post, setPost] = useState([]);
    // const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://localhost:5000/post')
        .then(res => res.json())
        .then(data => {
          setPost(data);
          // setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching tags:', error);
          // setLoading(false);
        });
    }, []);
    
    return (
        <div>
            {
                post.map(item =><SinglePost key={item.id} item={item}></SinglePost>)
            }
        </div>
    );
};

export default Post;


