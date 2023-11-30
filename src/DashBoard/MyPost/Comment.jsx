import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdReport } from "react-icons/md";

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [feedbackMap, setFeedbackMap] = useState({});
    const { title } = useParams();



    useEffect(() => {
        fetch(`https://community-forum-ass-12-server.vercel.app/comment/${title}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setComments(data);
            });
    }, []);



    const handleFeedbackChange = (id, event) => {
        const feedback = event.target.value;
        setFeedbackMap((prevFeedbackMap) => ({
            ...prevFeedbackMap,
            [id]: feedback,
        }));
    };



    const handleReportClick = (id) => {
        const selectedFeedback = feedbackMap[id];

        const item = {
            feedback: selectedFeedback,
             title,
            
        };

        console.log('Reporting comment with ID', id, item);


        fetch('https://community-forum-ass-12-server.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

            });

        setFeedbackMap((prevFeedbackMap) => ({
            ...prevFeedbackMap,
            [id]: '', 
        }));
    };

    return (
        <div>
            <div className="overflow-x-auto w-full mt-16 border-4 border-y-teal-900 ">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Comment</th>
                            <th>Email</th>
                            <th>Feedback</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody className="my-6">
                        {comments.map((comment, index) => (
                            <tr key={comment.id}>
                                <th>{index + 1}</th>
                                <td>{comment.title}</td>
                                <td>{comment.comment}</td>
                                <td>{comment.email}</td>
                                <td>
                                    <select
                                        name="feedback"
                                        value={feedbackMap[comment._id] || ''}
                                        onChange={(event) => handleFeedbackChange(comment._id, event)}
                                        className="p-2"
                                    >
                                        <option defaultValue="default">Select Feedback</option>
                                        <option value="Positive">Positive</option>
                                        <option value="Neutral">Neutral</option>
                                        <option value="Negative">Negative</option>
                                    </select>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-circle btn-sm text-teal-700 text-3xl"
                                        onClick={() => handleReportClick(comment._id)}
                                        disabled={!feedbackMap[comment._id]}
                                    >
                                        <MdReport />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Comment;
