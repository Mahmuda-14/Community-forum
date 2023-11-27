
import { useEffect, useState } from "react";

const Tag = () => {
  const [tags, setTags] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('Tag.json')
      .then(res => res.json())
      .then(data => {
        setTags(data);
      
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
       
      });
  }, []);
  const displayedTags = tags.slice(0, 5);

  return (
    <section className="bg-gray-200 p-8 text-left h-auto">
      <h2 className=" text-lg font-semibold ">My Tags</h2>
      <ul className="list-none p-0">

        {

          displayedTags.map(tag => (<li key={tag.id}><a href={`${tag.tag}`} title={tag.name} className=" text-left">#{tag.name}</a></li>))
        }


      </ul>
    </section>
  );
};

export default Tag;




