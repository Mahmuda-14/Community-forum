
/* eslint-disable react/prop-types */
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


import { FaRegComment } from "react-icons/fa";


const MyProfile = ({ item}) => {
   
    const { _id, name, title, picture, tags, time, upvote, downvote } = item;
    const total = upvote + downvote;

   
    const [comment, setComment] = useState([]);
   
   



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

export default MyProfile;
