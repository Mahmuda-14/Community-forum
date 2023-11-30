import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className=" pl-[6rem] pr-8 pb-2">
           
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline border-2 border-teal-600">
                   Join Us with <FaGoogle className="mr-2 text-xl text-teal-700 "></FaGoogle>
                   
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;