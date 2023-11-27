
// import { useState, useEffect, useContext } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import SinglePost from "../../Pages/Post/SinglePost";
// // import { AuthContext } from '../../Provider/AuthProvider';

// const MyPost = () => {
//   const { email } = useParams();
//   const all = useLoaderData();

//   const { user } = useContext(AuthContext);

//   const userEmail = user?.email;
//   console.log(userEmail)

//   const [filteredServices, setFilteredServices] = useState([]);

//   useEffect(() => {
//     if (userEmail) {

//       const userAssignments = all.filter((service) => service.email === userEmail);
//       setFilteredServices(userAssignments);
//     } else {

//       setFilteredServices(all);
//     }
//   }, [email, all, userEmail]);

//   return (
//     <div className="bg-no-repeat bg-cover ">
//       <h2 className="text-2xl text-center font-semibold">Recent Posts : {filteredServices.length}</h2>

    
//       <div className="overflow-x-auto w-full">
        
//             {
//                 filteredServices.map(item =><SinglePost key={item._id} item={item}></SinglePost>)
//             }
        
//       </div>
//     </div>
//   );
// };

// export default MyPost;








import  { useState, useEffect, useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SinglePost from "../../Pages/Post/SinglePost";
import { Link } from "react-router-dom";

const MyPost = () => {
  const { email } = useParams();
  const all = useLoaderData();

  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const [filteredServices, setFilteredServices] = useState([]);
  const maxPostCount = 5; // Set the maximum post count here

  useEffect(() => {
    if (userEmail) {
      const userAssignments = all.filter((service) => service.email === userEmail);
      setFilteredServices(userAssignments);
    } else {
      setFilteredServices(all);
    }
  }, [email, all, userEmail]);

  return (
    <div className="bg-no-repeat bg-cover ">
      <h2 className="text-2xl text-center font-semibold">
        Recent Posts: {filteredServices.length}
      </h2>

      <div className="overflow-x-auto w-full">
        {filteredServices.length >= maxPostCount ? (
          <div>
            <p>You have reached the maximum allowed posts.</p>
            <p>
              Click the button below to become a member and post more:
              <Link to="/membership">Become a Member</Link>
            </p>
          </div>
        ) : (
          filteredServices.map((item) => (
            <SinglePost key={item._id} item={item}></SinglePost>
          ))
        )}
      </div>
    </div>
  );
};

export default MyPost;

