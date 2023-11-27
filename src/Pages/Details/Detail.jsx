
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SingleDetail from "./SingleDetail";

const Detail = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  console.log(id);

//   const url = `http://localhost:5000/post/${id}`;

  useEffect(() => {
    // Fetch the product details based on the _id
    fetch(`http://localhost:5000/post/${id}`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, [id]);




  return (
    <div>
      <div>
        <SingleDetail key={detail._id} detail={detail}></SingleDetail>
      </div>
    </div>
  );
};

export default Detail;











