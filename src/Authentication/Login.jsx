
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import {  useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocilaLogin';

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
                    title: 'User Login Successful.',
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
            <h1 className="text-5xl text-center mt-10 font-bold">Login now!</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    {/* <div className="text-center md:w-1/2 lg:text-left">

                        <img src="" className='' alt="" />
                    </div> */}
                    <div className="card shadow-2xl bg-base-100">
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


                          
                            
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </form>
                        <SocialLogin></SocialLogin>

                        <p className=' text-center'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Login;