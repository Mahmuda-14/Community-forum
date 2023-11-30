/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
// import './Banner.css';
// import bg from '../../assets/cover-v2-1.mp4'


// const Banner = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     // const [searchResults, setSearchResults] = useState([]);

//     const handleSearch = () => {
//         onSearch(searchTerm);

//     };

//     useEffect(()=>{
//         fetch(`https://community-forum-ass-12-server.vercel.app/tag/${tag}`)
//     },[])

//     return (
//         <div className="flex justify-center items-center py-20 px-36  text-white h-[20.5rem] rounded-2xl mt-4">


//             <video autoPlay loop muted playsInline className='video-background'>
//                 <source src={bg} type="video/webm" />

//                 Your browser does not support the video tag.
//             </video>



//             <div className="search-bar ">
//                 <input
//                     className='search-bar input'
//                     type="text"
//                     placeholder="Search for images..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button className='search-bar button' onClick={handleSearch}>Search</button>
//                 {/* <SearchComponent onSearch={handleSearch} />
//                 <SearchResult results={searchResults} /> */}
//             </div>
//         </div>

//     );
// };

// export default Banner;







import { useEffect, useState } from 'react';
import './Banner.css';
import bg from '../../assets/cover-v2-1.mp4';

const Banner = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            console.log('Searching with term:', searchTerm);

            const response = await fetch(`https://community-forum-ass-12-server.vercel.app/tag/${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Search results:', data);
                setSearchResults(data);
            } else {
                console.error(`Error: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            // Fetch search results based on the search term
            handleSearch();
        }
    }, [searchTerm]);

    return (
        <div className="flex justify-center items-center py-20 px-36  text-white h-[20.5rem] rounded-2xl mt-4">
            <video autoPlay loop muted playsInline className='video-background'>
                <source src={bg} type="video/webm" />
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

            {/* Display search results, for example: */}
            <div>
                {/* You can customize how you display the search results here */}
            </div>
        </div>
    );
};

export default Banner;
