import { useEffect, useState } from "react";

const Report = () => {

    const [feedback, setFeedBack] = useState([]);




    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFeedBack(data);
            });
    }, []);




    return (
        <div>
            <div className="overflow-x-auto w-full mt-16 border-4 border-y-teal-900 ">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Feedback</th>
                            
                        </tr>
                    </thead>
                    <tbody className="my-6">
                    {feedback.map((item, index) => (
                         <tr key={item.id}>
                            <th>{index+1}</th>
                           
                         <td>{item.title}</td>
                         <td>{item.feedback}</td>
                        
                            </tr>
                         ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;