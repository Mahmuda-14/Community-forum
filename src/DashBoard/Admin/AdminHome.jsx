
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminHome = () => {

  const { user } = useContext(AuthContext);

  // console.log(userEmail);
  const photo = user?.photoURL;

  const [postCount, setPostCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [userCount, setUserCount] = useState(0);





  useEffect(() => {
    fetch('https://community-forum-ass-12-server.vercel.app/post')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setPostCount(data);

      })
      .catch(error => {
        console.error('Error fetching tags:', error);

      });
  }, []);

  useEffect(() => {
    fetch('https://community-forum-ass-12-server.vercel.app/comment')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCommentCount(data);

      })
      .catch(error => {
        console.error('Error fetching tags:', error);

      });
  }, []);

  useEffect(() => {
    fetch('https://community-forum-ass-12-server.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setUserCount(data);

      })
      .catch(error => {
        console.error('Error fetching tags:', error);

      });
  }, []);









  return (
    <div>
      <div>

        <div className="card w-full">
          <div className="">
            <img className="ml-[18rem] w-40 h-40 rounded-full" src={photo} alt="" />
            <div className="flex">
              <h2 className="mt-11 ml-[18rem] font-bold">{user?.displayName}</h2>

            </div>
          </div>
          <div className="">
            <h2 className="gap-5 ml-[287px] font-bold">
              <>Email : {user?.email}</>
            </h2>
            

            <div className="text-lg mt-11 text-left p-8 mx-11 border-2 border-y-teal-200">


            <h2>Number of Post : {postCount.length}</h2>
            <hr />
            <h2>Number of post : {commentCount.length}</h2>
            <hr />
            <h2>Number Of User : {userCount.length}</h2>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;





