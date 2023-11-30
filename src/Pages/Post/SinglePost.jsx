/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
const SinglePost = ({ item }) => {
    const { _id, name, title, picture, tags, time, upvote, downvote } = item;
    const total = upvote + downvote;

    const [comment, setComment] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toDateString();
    };


    useEffect(() => {
        fetch(`https://community-forum-ass-12-server.vercel.app/comment/${title}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setComment(data)
            })
    }, [])









    return (
        <div className="my-10">
            <div className="card  bg-base-100 border-4 border-teal-200 border-y-teal-500 shadow-xl">
                <div className="flex ml-5 mx-5">
                    <img src={picture} alt="" className=" w-11 h-11 rounded-full" />
                    <div className=" mx-4">
                        <h2>{name}</h2>
                        <p>Posted on {formatDate(time)}</p>
                    </div>
                </div>
                <div className="card-body">
                    <Link to={`/post/${_id}`}> <h2 className="card-title">{title}</h2></Link>
                    <a href="">{tags}</a>


                    <div className="card-actions justify-start">
                        
                        <button className="btn gap-0"><AiFillLike /><AiFillDislike />{total} reactions</button>
                        {/* <button className="btn"><AiFillDislike />{downvote} Dislikes</button> */}
                        <button className="btn"><FaRegComment></FaRegComment>{comment.length} Comments</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;