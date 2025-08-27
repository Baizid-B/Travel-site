import React from 'react';
import { NavLink } from 'react-router-dom';

const AllPackageitem = ({item}) => {

    const {photo,tourType,tripTitle,price,viewDetailsUrl} = item;

    return (
        <div className="card bg-base-200 shadow-xl overflow-hidden">
            <figure className="">
                <img
                src={photo}
                alt="Shoes"
                className="rounded-xl overflow-hidden duration-500 hover:scale-110" />
            </figure>
            <div className="card-body">
                <div className='flex flex-row items-center'>
                    <h2 className="card-title">{tourType}</h2>
                    <p className='font-bold ml-10'>{price}</p>
                </div>
                <p>{tripTitle}</p>

                <div className="card-actions my-4">
                    <button className="btn bg-[#3babdb]"><NavLink to='/details'>Details</NavLink></button>
                </div>
            </div>
        </div>
    );
};

export default AllPackageitem;