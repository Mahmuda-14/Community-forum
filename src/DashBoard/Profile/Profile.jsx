import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import MyProfile from "./MyProfile";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MdDownloadDone } from "react-icons/md";



const Profile = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  console.log(userEmail);
  const photo = user?.photoURL;
  const hasBronzeBadge = user?.email;

  const { register, handleSubmit, reset } = useForm();

  const all = useLoaderData();
  const [filterPost, setFilterPost] = useState([]);

  useEffect(() => {
    if (userEmail) {
      const filterUser = all.filter((service) => service.email === userEmail);

      const sortedUserAssignments = filterUser.sort((a, b) => {
        const timeA = new Date(a.time);
        const timeB = new Date(b.time);
        return timeB - timeA;
      });

      setFilterPost(sortedUserAssignments);
      setFilterPost(filterUser);

    }
  }, [userEmail, all]);

  const displayedTags = filterPost.slice(0, 3);





  const onSubmit = async (data) => {
    const menuItem = {
      name: data.name,
      email: data.email,     
      description: data.description,    
      picture: data.picture
      // picture: data.user?.photoURL
    }

    console.log(menuItem)
    fetch('https://community-forum-ass-12-server.vercel.app/about', {
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
      <div>
        <div className="card w-full">
          <div >
            <div className="flex">
              <img className="lg:ml-[18rem] w-40 h-40 rounded-full" src={photo} alt="" />
              <button className="btn btn-sm ml-40" onClick={() => document.getElementById('my_modal_1').showModal()}><FaRegEdit className="text-2xl"></FaRegEdit></button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">About Me!!</h3>
                 
                  <div className="modal-action">



                    <form method="dialog" className="w-[300px]" onSubmit={handleSubmit(onSubmit)}>


                      <div className="form-control w-full mb-4">
                        <label className="label">
                          <span className="label-text">Author Name*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Author Name"
                          {...register('name', { required: true })}

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
                          <span className="label-text">Education</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Education"
                          {...register('title', { required: true })}

                          required
                          className="input input-bordered w-full" />
                      </div>



                  


                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">About me</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Post Description"></textarea>
                      </div>

                      <button className="btn bg-teal-600 text-white my-11 ">Add Post<MdDownloadDone className="ml-4 text-white text-3xl"></MdDownloadDone>
                      </button>

                    </form>
                   







                  </div>
                </div>
              </dialog>



            </div>
            <div className="flex">
              <h2 className="mt-11 lg:ml-[18rem] font-bold">{user?.displayName}</h2>
              {hasBronzeBadge && (
                <h2 className="text-red-900 text-4xl mt-9">
                  <LuBadgeCheck />
                </h2>
              )}
            </div>
          </div>
          <div className="">
            <h2 className="gap-5 lg:ml-[287px] font-bold">
              Email : {user?.email}

            </h2>
            <Link to="me"><button className="btn gap-5 lg:ml-[293px] lg:my-4">About me</button></Link>

            <div className=" mt-11">
              {displayedTags.map((item) => (
                <MyProfile key={item._id} item={item}></MyProfile>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
