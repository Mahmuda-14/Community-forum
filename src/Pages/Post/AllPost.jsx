import Tag from "../Tags/Tag";
import Post from "./Post";


const AllPost = () => {
    return (
        <div className="grid grid-cols-3 gap-10 m-1">
         <div className=" h-11 justify-start mt-[7.5rem] ">
         <Tag></Tag>
         </div>
           <div className=" col-span-2">
            <Post></Post>
           </div>
        </div>
    );
};

export default AllPost;











