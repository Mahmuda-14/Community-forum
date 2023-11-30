
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import {  useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocilaLogin';
import { CgProfile } from "react-icons/cg";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";



    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })

    }

    

    return (
        <>
            
            <div className=" hero m-9">
                    <div className="card shadow-2xl w-[22rem] bg-base-100 ">
                        <CgProfile className='text-8xl ml-[124px] text-teal-600'></CgProfile>
                        <h1 className="text-4xl text-center font-semibold">Login now!</h1>
                        <form className="card-body" onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                          
                            <div className="form-control mt-3">
                                <input  className="btn bg-teal-600 text-white" type="submit" value="Login" />
                            </div>

                        </form>
                        <hr className='-mt-3 mb-3 mx-7' />
                        <SocialLogin></SocialLogin>

                        <p className=' text-center p-5'><small>New Here? <Link className=' underline text-blue-600' to="/signup">Create an account</Link> </small></p>
                    </div>
                    
                </div>
           
        </>
    );
};

export default Login;