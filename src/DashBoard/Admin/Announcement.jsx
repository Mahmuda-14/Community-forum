
// import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Announcement = () => {
    const { user } = useContext(AuthContext);
    const photo = user?.photoURL
    const hasBronzeBadge = user?.email;
    




    const handleAddNews = event => {
        event.preventDefault();

        const form = event.target;

       
        const title = form.title.value; 
        const description = form.description.value;
        const email = user.email;

        const news = { title, description,email }

        console.log(news);

        // send data to the server

        fetch('https://community-forum-ass-12-server.vercel.app/news', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(news)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Announcement Added succefully');
            })
    }



    return (

        
            <div className="card  shadow-xl mt-8 border-y-4 border-y-teal-700">
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
                    <h2 className=" gap-5 ">
                        <><span className="text-xl font-bold">Email : </span>{user?.email}</>
                    </h2>

                    <h2 className="card-title"></h2>
                    <div className=" mt-10">


                        <form onSubmit={handleAddNews}>
                            <div className="form-control w-full">
                                <label className="label">
                                    Title
                                </label>

                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full border-2 border-teal-400 rounded-xl " required />

                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    Description
                                </label>

                                <textarea
                                    className=' border-2 border-teal-400 rounded-xl mt-4 pr-52'
                                    rows="2"
                                    cols="90"
                                    placeholder="Make an Announcement..."
                                    name="description" />
                            </div>

                            <input type="submit" className='btn bg-teal-500 mt-6 ml-[25rem] text-white ' value="Make Announcement" />
                        </form>
                        <ToastContainer />
                    </div>


                </div>

            </div>
        

    );
};

export default Announcement;


