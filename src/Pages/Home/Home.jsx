import { Outlet } from "react-router-dom";
// import NavBar from "../../Shared/NavBar";
import Banner from "../Banner/Banner";
import AllPost from "../Post/AllPost";


const Home = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <Banner></Banner>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;