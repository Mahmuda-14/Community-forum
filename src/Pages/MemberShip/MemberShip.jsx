import bg from '../../assets/my3-removebg-preview.png'

const MemberShip = () => {
    return (
        <div>

            <div className="card card-side border-2 border-x-teal-700 m-24">
                <div className='flex flex-col '>
                    <img className='w-[31rem]' src={bg} alt="Movie" />
                    <h2 className=" text-2xl font-serif text-teal-600 text-left mx-4">Upgrade to ByteTalk Pro</h2>
                </div>

                <div className="card-body">
                    <h2 className="card-title">Enjoy Our premium Content</h2>
                    <div className="divider"></div>
                    <ul>
                        <li>🔒 Exclusive Content</li>
                        <li>📱 In-App Download Available</li>
                        <li>💻 4-Device Login & 1-Screen at a Time</li>

                    </ul>

                    <div className="card-actions justify-end">
                        <button className="btn bg-teal-600 text-white mr-20">Become a Member</button>
                    </div>
                </div>
            </div>
          

        </div>

    );
};

export default MemberShip;