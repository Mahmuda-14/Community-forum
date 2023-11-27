import './Banner.css'

const Banner = () => {
    return (
        <div className="flex justify-center items-center py-20 px-36 featured-item text-white h-[20.5rem] rounded-2xl mt-4">
            <div className="join">
       
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                            
                        </div>

                        <div className="indicator">

                            <button className="btn join-item">Search</button>
                        </div>
                        <input type="search" name="" id="" />
                    </div>
                </div>
    );
};

export default Banner;

