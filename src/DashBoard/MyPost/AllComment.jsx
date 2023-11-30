/* eslint-disable react/prop-types */


const AllComment = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { comment, title, email } = item;

    return (
        <div>
        

           <div>
                <div className="overflow-x-auto mt-16 border-4 border-y-teal-900">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Comment</th>
                                    <th>Email</th>
                                    <th>Feedback</th>
                                    <th>Report</th>

                                </tr>
                            </thead>
                            <tbody>
                                <td>{title}</td>
                                <td>{comment}</td>
                                <td>{email}</td>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllComment;