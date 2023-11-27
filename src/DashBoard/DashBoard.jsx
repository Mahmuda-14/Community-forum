
import { FaUsers } from "react-icons/fa";
import { FaHome, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAddBox } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { IoArrowBackCircle } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";



const DashBoard = () => {

    const [isAdmin] = useAdmin();
 

    return (
        
        <div className="flex m-11">

            {/* dashboard side bar */}
            <div className="w-64 h-[30rem] mt-[67px] bg-teal-100 border-y-4 border-y-teal-700">
                <h2 className=" text-center mb-11 mt-8 font-bold text-2xl">DashBoard</h2>
                <hr />

                <ul className="menu p-4">
                    {
                        isAdmin ?
                            (<>

                                <li>
                                    <NavLink to="/dashboard/admin">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all">
                                        <FaUsers></FaUsers>
                                        Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/report">
                                        <MdReportProblem></MdReportProblem>
                                        Reported Activities</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/ann">
                                        <GrAnnounce></GrAnnounce>
                                        Make Announcement</NavLink>
                                </li>


                            </>)
                            :

                            (<>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/profile">
                                        <CgProfile></CgProfile>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add">
                                        <MdAddBox></MdAddBox>
                                        Add Post</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/my">
                                        <FaList></FaList>
                                        My Post</NavLink>
                                </li>
                            </>)
                    }

                    
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <IoArrowBackCircle></IoArrowBackCircle>
                           Go Back</NavLink>
                    </li>
                    
                </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
               
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;

