import { Outlet } from "react-router-dom";
// import NavBar from "../../Shared/NavBar";
import Banner from "../Banner/Banner";
import AllPost from "../Post/AllPost";
import { useState } from "react";


const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div>
            
            <Outlet></Outlet>
            <Banner setSearchResults={setSearchResults}></Banner>
            <AllPost searchResults={searchResults}></AllPost>
        </div>
    );
};

export default Home;