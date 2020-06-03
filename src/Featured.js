import React from 'react';

function Featured() {
    return (
        <div className="max-w-full mx-32 mt-20 py-6 bg-white rounded-lg shadow-lg flex brc">
            <div className="flex lg:w-6/12">
                <div className="ml-6 mr-5">
                    <img class="h-24 w-24 rounded-full" src={"/images/photosnap.svg"} alt="" />
                </div>
                <div className="ml-4">
                    <div className="text-lg inline-flex leading-8 font-bold text-teal-500 pr-3">Photosnap</div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-400 text-green-800 mr-2">
                    NEW!</span>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-black text-white">
                    FEATURED</span>

                    <div className="text-blue-900 text-xl">Senior Frontend Developer</div>
                    <span className="text-gray-600 font-light mr-3">1d ago</span>
                    <span className="text-gray-600 font-light mr-3">.</span>
                    <span className="text-gray-600 font-light mr-3">Full Time</span>
                    <span className="text-gray-600 font-light mr-3">.</span>
                    <span className="text-gray-600 font-light mr-3">USA only</span>

                </div>
            </div>
            <div className="lg:w-6/12 mt-8">
                <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                Frontend</span>
                <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                Senior</span>
                <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                HTML</span>
                <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                CSS</span>
                <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                JavaScript</span>
            </div>

        </div>



    )
}





export default Featured;








