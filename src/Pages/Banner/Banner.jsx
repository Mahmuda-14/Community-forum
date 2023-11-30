/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Banner.css';
import bg from '../../assets/cover-v2-1.mp4';

const Banner = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
       
            const response = await fetch(`https://community-forum-ass-12-server.vercel.app/tag/${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            } else {
                console.error(`Error: ${response.statusText}`);
            }
       
        
    };

    return (
        <div className="flex justify-center items-center py-20 px-36 text-white h-[20.5rem] rounded-2xl mt-4">
            <video autoPlay loop muted playsInline className='video-background'>
                <source className='sm:h-[500px]' src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="search-bar">
                <input
                    className='search-bar input'
                    type="text"
                    placeholder="Search for images..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='search-bar button' onClick={handleSearch}>
                    Search
                </button>
            </div>
             <div>

             </div>
            </div>
       
    );
};

export default Banner;
