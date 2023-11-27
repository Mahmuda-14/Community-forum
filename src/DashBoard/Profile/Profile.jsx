import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuBadgeCheck } from "react-icons/lu";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const photo = user?.photoURL
    const hasBronzeBadge = user?.email;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="flex mt-6">
                    <img className=" ml-11 w-28" src={photo} alt="" />
                    <div className="flex">
                    <h2 className=" mt-11 ml-7 font-bold">{user?.displayName}</h2>
                    {hasBronzeBadge && (
                            <h2 className=" text-red-900 text-4xl mt-9">
                                <LuBadgeCheck />
                            </h2>
                        )}

                    </div>
                    
                 
                </div>
                <div className="card-body">
                    <h2 className=" gap-5">
                          <>Email : {user?.email}</>
                    </h2>
                    
                    <h2 className="card-title">All Posts</h2>
                    <div className="border-4">
                        <h2></h2>
                    

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;