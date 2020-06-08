import React from 'react'


function Job(props){
    return (
        <div className="mb-40">
            {
                props.items.map(item => {
                    return <div key={item.id} className="max-w-full mx-32 my-6 py-6 bg-white rounded-lg shadow-lg flex">
                                <div class="bg-teal-600 rounded-lg w-1 h-auto -mt-6 -mb-6"></div>
                                <div className="flex lg:w-6/12">
                                    <div className="ml-6 mr-5">
                                        <img class="h-24 w-24 rounded-full" src={item.logo} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-lg inline-flex leading-8 font-bold text-teal-500 pr-3">{item.company}</div>
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-400 text-green-800 mr-2">
                            {
                             item.new
                            }</span>
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-black text-white">
                            {item.featured}</span>

                                        <div className="text-blue-900 text-xl">{item.position}</div>
                                        <span className="text-gray-600 font-light mr-3">{item.postedAt}</span>
                                        <span className="text-gray-600 font-light mr-3">.</span>
                                        <span className="text-gray-600 font-light mr-3">{item.contract}</span>
                                        <span className="text-gray-600 font-light mr-3">.</span>
                                        <span className="text-gray-600 font-light mr-3">{item.location}</span>

                                    </div>
                                </div>
                                <div className="lg:w-6/12 mt-8">
                                    <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                                    {item.role}</span>
                                    <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                                    {item.level}</span>
                                    <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                            {item.languages}</span>
                                    <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                            {item.tools}</span>
                                    {/* <span className="px-4 py-2 mr-4 inline-flex text-lg leading-5 font-semibold rounded-md bg-green-100 text-teal-500">
                                    JavaScript</span> */}
                                </div>

                             </div>
                })
            }
        </div>

        
    );
}


export default Job;


