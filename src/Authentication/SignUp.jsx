

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocilaLogin";
import useAxiosPublic from "../hooks/useAxiosPublic";
import bg from '../assets/5607.jpg'



const SignUp = () => {
  

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <>
           
            
            <div className=" hero flex flex-row mt-[26px] mb-16">
                
                    <div className="w-1/2">
                        <img className="" src={bg} alt="" />                   
                    </div>

                    <div className="w-[24rem] h-[41rem] my-11 border-4 border-y-teal-700 shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-semibold text-center mt-1">Sign-Up </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", { required: true })}

                                    name="name" placeholder="Name" className="input input-bordered" />

                                {
                                    errors.name && <span className="text-red-600">Name is required</span>
                                }

                            </div>

                            {/* Photo */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    {...register("photoURL", { required: true })}

                                    placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>


                            {/* Email */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email"

                                    {...register("email", { required: true })}
                                    name="email" placeholder="email" className="input input-bordered" />

                                {errors.email && <span className="text-red-600">Email is required</span>}

                            </div>

                            {/* password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"

                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}

                                    placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <input className="btn bg-teal-600 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className=' text-center'><small>New Here? <Link className=' underline text-blue-600' to="/login">Login</Link></small></p>
                    </div>
                </div>
        
        </>
    );
};

export default SignUp;