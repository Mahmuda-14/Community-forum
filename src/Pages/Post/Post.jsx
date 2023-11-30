import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Post = () => {
  const [post, setPost] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const last = currentPage * itemsPerPage;
  const first = last - itemsPerPage;
  const currentItems = post.slice(first, last);


  useEffect(() => {
    fetch('https://community-forum-ass-12-server.vercel.app/post')
      .then(res => res.json())
      .then(data => {
        setPost(data);

      })
      .catch(error => {
        console.error('Error fetching tags:', error);

      });
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="mt-[7.5rem] mb-4">
      {
        currentItems.map(item => <SinglePost key={item.id} item={item}></SinglePost>)
      }

      <div className="flex justify-center m-11">

        {
          Array.from({ length: Math.ceil(post.length / itemsPerPage) }, (_, index) => (

            <button key={index + 1} onClick={() => paginate(index + 1)} className={`mx-2 px-4 py-2 border ${currentPage === index + 1 ? "btn bg-cyan-500 text-white" : ""}`}> {index + 1} </button>))}
      </div>
    </div>
  );
};

export default Post;


