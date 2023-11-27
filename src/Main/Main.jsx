import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar";


const Main = () => {
    const location = useLocation();
// console.log(location);
const noNav = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
              { noNav  || <NavBar></NavBar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;

