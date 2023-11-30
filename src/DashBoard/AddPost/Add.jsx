
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdDownloadDone } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import {  Link, useLoaderData, useParams } from "react-router-dom";
import bg from '../../../src/assets/back.webp'

const Add = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const [filteredServices, setFilteredServices] = useState([]);
    const maxPostCount = 5;


    const { email } = useParams();
    const all = useLoaderData();
    const userEmail = user?.email;

   

    useEffect(() => {
        if (userEmail) {
            const userAssignments = all.filter((service) => service.email === userEmail);
            setFilteredServices(userAssignments);
        } else {
            setFilteredServices(all);
        }
    }, [email, all, userEmail]);



    const onSubmit = async (data) => {
        const menuItem = {
            name: data.name,
            email: data.email,
            title: data.title,
            time: new Date().toISOString(),
            tags: data.tag,
            description: data.description,
            upvote: parseFloat(data.upvote),
            downvote: parseFloat(data.downvote),
            picture: data.picture
            // picture: data.user?.photoURL
        }

        console.log(menuItem)
        fetch('https://community-forum-ass-12-server.vercel.app/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(menuItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} is added to the menu.`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                   
                }
            });
    };




    return (


        <div>
            {filteredServices.length >= maxPostCount ? (
                <div className=" ml-[21.5rem]">
                    <img  src={bg} alt="" />
                    <p>Sorry, you have exceeded the post limit.</p>
                    <Link to="/membership"><button className="btn btn-outline btn-success text-white mt-7 ml-9 rounded-3xl">Become a Member</button></Link> 
                </div>
            ) :
                (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <h2>Recent Posts: {filteredServices.length}</h2> */}

                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Author Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Author Name"
                                {...register('name', { required: true })}
                                defaultValue={user?.displayName}
                                readOnly
                                className="input input-bordered w-full" />
                        </div>


                        <div className="flex">

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Author email*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Author Email"
                                    {...register('email', { required: true })}
                                    defaultValue={user?.email}
                                    readOnly

                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2 mt-[36px] ml-3">
                                <input {...register('picture', { required: true })}
                                placeholder="Put image here..."
                                 className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Post Title*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Post Title"
                                {...register('title', { required: true })}

                                required
                                className="input input-bordered w-full" />
                        </div>


                        <div className="flex gap-6">
                            {/* tag */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">tag*</span>
                                </label>
                                <select defaultValue="default" {...register('tag', { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select a tag</option>
                                    <option value="#Technology"> #Technology</option>
                                    <option value="#Programming"> #Programming</option>
                                    <option value="#Web Development"> #Web Development</option>
                                    <option value="#Design"> #Design</option>


                                </select>
                            </div>


                        </div>

                        <div className="flex gap-3">
                            <div className="form-control w-1/2 my-6">
                                <label className="label">
                                    <span className="label-text">UpVote*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="UpVote"
                                    {...register('upvote', { required: true })}
                                    defaultValue={0}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control w-1/2 my-6">
                                <label className="label">
                                    <span className="label-text">DownVote*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="DownVote"
                                    {...register('downvote', { required: true })}
                                    defaultValue={0}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Post Description"></textarea>
                        </div>

                        <button className="btn bg-teal-600 text-white my-11 ml-[23rem]">Add Post<MdDownloadDone className="ml-4 text-white text-3xl"></MdDownloadDone>
                        </button>
                       
                    </form>
                    
                )
            }

        </div >


    );
};

export default Add;