import { NavLink } from "react-router-dom";

const PackageItem = ({packs}) => {
    const {photo,tourType,tripTitle,price,viewDetailsUrl} = packs;
    return (
        <div className="card bg-base-200 shadow-xl rounded-none">
            <figure className="">
                <img
                src={photo}
                alt={tripTitle} />
            </figure>

            <div className=" bg-sky-100 p-5">
                <div className='w-[100%] flex justify-between items-center mb-3'>
                    <h2 className="font-semibold text-2xl">{tourType}</h2>
                    <p className='font-bold'>{price}</p>
                </div>
                <p className="text-lg font">{tripTitle}</p>

                <div className="card-actions my-4">
                    <button className="btn bg-[#ffffff]"><NavLink to='/details'>Deteails</NavLink></button>
                </div>
            </div>
        </div>
    );
};

export default PackageItem;