import bg from '../../assets/my3-removebg-preview.png'

const MemberShip = () => {
    return (
        <div>
            
            <div className="card card-side bg-base-100 m-24 shadow-xl">
               <div className='flex'>
               <img className=' w-[31rem]' src={bg} alt="Movie" />
                <h2 className=" ">Upgrade to ByteTalk Pro</h2>
               </div>

                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-row my-20 justify-evenly">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">


                        <h2 className="card-title">6 Months</h2>
                        <div className="divider"></div>
                        <ul>
                            <li>🔒 Exclusive Content</li>
                            <li>📱 In-App Download Available</li>
                            <li>💻 4-Device Login & 1-Screen at a Time</li>

                        </ul>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>

    );
};

export default MemberShip;