
/* eslint-disable react/prop-types */
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaRegComment } from "react-icons/fa";


const MyPostEdit = ({ item}) => {
   
    const { _id, name, title, picture, tags, time, upvote, downvote } = item;
    const total = upvote + downvote;

 
    const [comment, setComment] = useState([]);
    const [remaining, setRemaining] = useState([]);
   



    useEffect(() => {
        fetch(`https://community-forum-ass-12-server.vercel.app/comment/${title}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setComment(data)
            })
    }, [])




    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toDateString();
    };


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://community-forum-ass-12-server.vercel.app/post/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const total = remaining.filter(cof => cof._id !== id);
                            setRemaining(total);
                        }
                    })
            }
        })

    }










    return (
        <div className="my-4">
            <div className="card bg-base-100 border-4 border-teal-200 border-y-teal-500 shadow-xl">
                <div className="flex">
                    <div className="flex ml-5 mx-5">
                        <img src={picture} alt="" className="w-11 h-11 rounded-full" />
                        <div className="mx-4">
                            <h2>{name}</h2>
                            <p>Posted on {formatDate(time)}</p>
                        </div>
                        <div className="ml-[31.7rem]">
                            <button onClick={() =>handleDelete(_id)} className="btn btn-sm btn-ghost text-2xl">
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <Link to={`/post/${_id}`}>
                        {' '}
                        <h2 className="card-title">{title}</h2>
                    </Link>
                    <a href="">{tags}</a>

                    <div className="card-actions justify-start">
                        <button className="btn gap-0">
                            <AiFillLike />
                            <AiFillDislike />
                            {total} reactions
                        </button>
                        <button className="btn">
                           
                            <FaRegComment></FaRegComment>                        
                            <Link to={`/comments/${title}`}>{comment.length} Comments</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostEdit;
