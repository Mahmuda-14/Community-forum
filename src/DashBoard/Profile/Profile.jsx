import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuBadgeCheck } from "react-icons/lu";
import MyPostEdit from "../MyPost/MyPostEdit";
import { useLoaderData } from "react-router-dom";



const Profile = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  console.log(userEmail);
  const photo = user?.photoURL;
  const hasBronzeBadge = user?.email;

  const all = useLoaderData();
  const [filterPost, setFilterPost] = useState([]);

  useEffect(() => {
    if (userEmail) {
      const filterUser = all.filter((service) => service.email === userEmail);

      const sortedUserAssignments = filterUser.sort((a, b) => {
        const timeA = new Date(a.time);
        const timeB = new Date(b.time);
        return timeB - timeA;
      });

      setFilterPost(sortedUserAssignments);
      setFilterPost(filterUser);

    }
  }, [userEmail, all]);

  const displayedTags = filterPost.slice(0, 3);


  return (
    <div>
      <div>
        <div className="card w-full">
          <div className="">
            <img className="ml-[18rem] w-40 h-40 rounded-full" src={photo} alt="" />
            <div className="flex">
              <h2 className="mt-11 ml-[18rem] font-bold">{user?.displayName}</h2>
              {hasBronzeBadge && (
                <h2 className="text-red-900 text-4xl mt-9">
                  <LuBadgeCheck />
                </h2>
              )}
            </div>
          </div>
          <div className="">
            <h2 className="gap-5 ml-[287px] font-bold">
              <>Email : {user?.email}</>
            </h2>
    
            <div className=" mt-11">
              {displayedTags.map((item) => (
                <MyPostEdit key={item._id} item={item}></MyPostEdit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
