import { Link } from "react-router-dom";
import logo from '../assets/my3.png'
import { LuBadgeCheck } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));

    }

    const nav = <>
        <li><Link to="/"><FaHome className=" text-teal-700"></FaHome>Home</Link></li>
        <li><Link to="/membership"><LuBadgeCheck className=" text-teal-700"></LuBadgeCheck>Membership</Link></li>
        <li><Link to="/"><IoNotifications className=" text-teal-700"></IoNotifications>Notification (0)</Link></li>

    </>

    const nav2 = <>
        {
            user ? <>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="avatar w-11  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"> {user?.photoURL && <img className=' w-11 h-11 rounded-full' src={user.photoURL} alt="User Photo" />}</label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li className=" m-7"> {user?.displayName}</li>
                       <Link to='/dashboard'><li><button className='btn justify-start btn-ghost'>DashBoard</button></li></Link>
                        <li><button onClick={handleLogOut} className='btn justify-start btn-ghost'>LogOut</button></li>
                    </ul>
                </div>



            </> :
                <>
                    <Link to="/login" className='btn btn-outline btn-success rounded-3xl mr-2'>Login</Link>
                    <Link to="/signup" className='btn rounded-3xl bg-teal-600 text-white'>Join US</Link>
                </>}


    </>






    return (
        <div>
            <div className="navbar bg-base-200 py-0 mt-4 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>

                    </div>
                    <Link to='/'>
                        <img className=' w-[13rem]' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>

                <div className="navbar-end ">
                    {nav2}

                    {/* <Link to="/login" className='btn btn-outline btn-success rounded-3xl mr-2'>Login</Link>
                    <Link to="/signup" className='btn rounded-3xl bg-teal-600 text-white'>Join US</Link> */}

                </div>
            </div>

        </div>
    );
};

export default NavBar;