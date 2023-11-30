/* eslint-disable react/prop-types */


const Single = ({ item }) => {
    
    const { title, description } = item;
     
    return (
        <div className="my-10">
            <div className="card justify-center mx-auto gap-2  w-1/2 bg-base-100 border-4 border-teal-200 border-y-teal-500 shadow-xl">
              
                <h2 className="text-2xl px-8 font-semibold text-teal-900">{title}</h2>
                <h2 className="px-8 py-3 overflow-x-scroll">{description}</h2>
            </div>
        </div>
    );
};

export default Single;





