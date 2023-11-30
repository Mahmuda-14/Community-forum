import { useState, useEffect, useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyPostEdit from "./MyPostEdit";


const MyPost = () => {
  const { email } = useParams();
  const all = useLoaderData();
  

  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const [filteredServices, setFilteredServices] = useState([]);

  
 
  useEffect(() => {
    if (userEmail) {
      const userAssignments = all.filter((service) => service.email === userEmail);
      setFilteredServices(userAssignments);
    } else {
      setFilteredServices(all);
    }
  }, [email, all, userEmail]);







  return (
    <div className="">
      <h2 className="text-2xl text-center font-semibold">
       My Recent Posts: {filteredServices.length}
      </h2>

      <div className="overflow-x-auto w-full">
        {
          filteredServices.map((item) => (
            <MyPostEdit key={item._id} item={item}></MyPostEdit>
            
          ))
        }
      </div>
      
     
    </div>
  );
};

export default MyPost;

