
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SingleDetail from "./SingleDetail";

const Detail = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  console.log(id);



  useEffect(() => {
    
    fetch(`https://community-forum-ass-12-server.vercel.app/post/${id}`)
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











