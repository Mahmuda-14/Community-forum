
import  { useEffect, useState } from "react";
import AppProvider from "./AppProvider";
import Single from "./Single";

const Notification = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://community-forum-ass-12-server.vercel.app/news')
      .then(res => res.json())
      .then(data => {
        setPost(data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  }, []);

  return (
    <AppProvider>
      <div>
        {post.map(item => <Single key={item.id} item={item} />)}
      </div>
    </AppProvider>
  );
};

export default Notification;



















