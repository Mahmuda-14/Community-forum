
/* eslint-disable react/prop-types */

import { useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import {
    FacebookShareButton, FacebookIcon
} from "react-share";
import { FaShare } from "react-icons/fa";




const SingleDetail = ({ detail }) => {
    const { name,description, title, picture, tags, time, comment, upvote, downvote,email } = detail;

    const [likeCount, setLikeCount] = useState(upvote);
    const [dislikeCount, setDislikeCount] = useState(downvote);
    const [commentCount, setCommentCount] = useState(comment);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');


   
    const shareUrl = "http://github.com";
 

    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    };

    const handleDislikeClick = () => {
        setDislikeCount(dislikeCount + 1);
    };

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setCommentCount(commentCount + 1);
        setNewComment('');
    };


    const handleSubmission = () => {
        

        const submissionData = {
            comment: newComment,
            title,
            email

        };

        console.log(submissionData);


        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

            });

    };



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toDateString();
    };

    return (
        <div className="my-10 ">
            <div className="card mx-[235px] bg-base-100 border-4 border-teal-200 border-y-teal-500 shadow-xl">
                <div className="ml-5 mx-5">
                    <img src={picture} alt="" className="w-full h-[20.5rem] my-5 rounded-3xl " />
                    <div className="flex justify-center gap-5">
                        <h2 className='font-bold'>{name} </h2>
                        <p >Posted on  <span className='font-bold'>{formatDate(time)}</span></p>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">{title}</h2>
                    <a href="">{tags}</a>
                    <p className=' text-left'>{description}</p>
                    <div className="card-actions justify-center">
                        <button className="btn gap-0 border-1 border-teal-700" onClick={handleLikeClick}><AiFillLike />{likeCount} reactions</button>
                        <button className="btn border-1 border-teal-700" onClick={handleDislikeClick}><AiFillDislike />{dislikeCount} Dislikes</button>
                        <button className="btn border-1 border-teal-700" onClick={handleCommentClick}><FaRegComment />{commentCount} Comments</button>
                        <button className="btn border-1 border-teal-700"><FaShare/> Share <FacebookShareButton
                            url={shareUrl}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton></button>
                    </div>
                </div>
            </div>

            {showComments && (
                <form onSubmit={handleCommentSubmit}>
                    <div>
                        <h2></h2>
                        <textarea
                            className='ml-[233px] mt-[21px] rounded-xl border-2 border-blue-600'
                            rows="2"
                            cols="90"
                            name="comment"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmission} className='btn bg-teal-500 mt-6 ml-[56rem]' type="submit">Submit Comment</button>

                    </div>
                    <div>



                    </div>
                </form>
            )}

        </div>
    );
};

export default SingleDetail;



