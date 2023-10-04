import React from 'react'

const sponsor = () => {
    return (
        <>
            <div className='flex flex-col  '>
                <div className='flex justify-center items-center'>
                    <div className='text-blue-900 font-clash-bold text-5xl mt-10 mb-3 justify-center items-center'>
                        SPONSOR
                    </div>
                </div>
                {/* <div className='mb-3'>
                    <div className=' w-100 h-100 mt-5 sm:flex flex-row justify-between   '>
                        <div className='hidden md:visible sm:flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="229" viewBox="0 0 229 229" fill="none">
                                <rect x="227.651" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 227.651 57.3015)" fill="#204289" />
                                <rect x="171.248" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 171.248 0.246826)" fill="#204289" />
                                <rect x="228.302" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 228.302 171.411)" fill="#204289" />
                                <rect x="171.248" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 171.248 114.356)" fill="#204289" />
                                <rect x="114.193" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 114.193 171.411)" fill="#204289" />
                                <rect x="114.193" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 114.193 57.3015)" fill="#204289" />
                                <rect x="57.7891" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 57.7891 0.246826)" fill="#204289" />
                                <rect x="57.1382" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 57.1382 114.356)" fill="#204289" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="229" viewBox="0 0 229 229" fill="none">
                                <rect x="227.651" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 227.651 57.3015)" fill="#204289" />
                                <rect x="171.248" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 171.248 0.246826)" fill="#204289" />
                                <rect x="228.302" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 228.302 171.411)" fill="#204289" />
                                <rect x="171.248" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 171.248 114.356)" fill="#204289" />
                                <rect x="114.193" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 114.193 171.411)" fill="#204289" />
                                <rect x="114.193" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 114.193 57.3015)" fill="#204289" />
                                <rect x="57.7891" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 57.7891 0.246826)" fill="#204289" />
                                <rect x="57.1382" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 57.1382 114.356)" fill="#204289" />
                            </svg>
                        {/* </div >
                        // <div className=' flex flex-col justify-center items-center m-auto'>
                        //     <div className="flex items-center justify-center h-full">
                        //         <div className="text-#1e3a8a font-satoshi text-4xl  whitespace-nowrap max-w-screen-xl mx-auto">
                        //             <span className="block mb-5 text-center">Title Sponsor</span>
                        //             <span className="block mt-5 mx-5 lg:mx-auto">
                        //                 // <img height="100" src="/assets/wolfram.png" alt="wolfram" className="px-5 lg:px-auto" />
                        //             </span>
                        //         </div>
                        //     </div>


                        // </div> */}
                {/* <div className='sm:flex flex-row hidden md:visible'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="229" viewBox="0 0 229 229" fill="none">
                                <rect x="227.651" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 227.651 57.3015)" fill="#204289" />
                                <rect x="171.248" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 171.248 0.246826)" fill="#204289" />
                                <rect x="228.302" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 228.302 171.411)" fill="#204289" />
                                <rect x="171.248" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 171.248 114.356)" fill="#204289" />
                                <rect x="114.193" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 114.193 171.411)" fill="#204289" />
                                <rect x="114.193" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 114.193 57.3015)" fill="#204289" />
                                <rect x="57.7891" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 57.7891 0.246826)" fill="#204289" />
                                <rect x="57.1382" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 57.1382 114.356)" fill="#204289" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="229" viewBox="0 0 229 229" fill="none">
                                <rect x="227.651" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 227.651 57.3015)" fill="#204289" />
                                <rect x="171.248" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 171.248 0.246826)" fill="#204289" />
                                <rect x="228.302" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 228.302 171.411)" fill="#204289" />
                                <rect x="171.248" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 171.248 114.356)" fill="#204289" />
                                <rect x="114.193" y="171.411" width="57.0547" height="57.0547" transform="rotate(90 114.193 171.411)" fill="#204289" />
                                <rect x="114.193" y="57.3015" width="57.0547" height="57.0547" transform="rotate(90 114.193 57.3015)" fill="#204289" />
                                <rect x="57.7891" y="0.246826" width="57.0547" height="57.0547" transform="rotate(90 57.7891 0.246826)" fill="#204289" />
                                <rect x="57.1382" y="114.356" width="57.0547" height="57.0547" transform="rotate(90 57.1382 114.356)" fill="#204289" />
                            </svg>
                        </div>
                    </div>

                </div>  */}

                <div className='text-blue-900 p-4 py-5 flex md:flex-row flex-col justify-center items-center md:mb-0 mb-3 mt-10'>
                    <h1 className="text-3xl font-bold mb-4">Silver Sponsor</h1>
                    <div className='w-full flex md:flex-row flex-col md:justify-between justify-center md:items-start'>
                        <div className=' flex flex-col justify-center items-center md:w-1/6 w-1/2 md:ml-0 ml-20 mt-3 p-4'>
                            <div className="flex justify-center items-center ">
                                <img height="100" src="/assets/foss.svg" alt="FOSS Image" className="object-contain" />
                            </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center md:w-1/4 w-1/2 md:ml-0 ml-20 mt-3 p-4'>
                            <img height="100" src='/assets/ieee.png' alt="IEEE Image" className="object-contain" />
                        </div>
                        <div className='bg-white flex flex-col justify-center items-center md:w-1/4 w-1/2 md:ml-0 ml-20 mt-3 p-4'>
                            <img height="100" src='/assets/echo.png' alt="Echo Image" className="object-contain" />
                        </div>
                    </div>
                </div>

                <div className='flex text-blue-900 p-4 py-5 justify-center items-center md:flex-row flex-col md:mb-0 mb-3 mt-6'>
                    <h1 className="text-3xl font-bold mb-4">Community Partner</h1>
                    <div className='flex justify-between w-full md:flex-row flex-col'>
                        <div className=' flex flex-col justify-center items-center md:w-1/6 w-1/2 md:ml-0 ml-20 p-4 '>
                            <img height="50" src="/assets/dhishna.png" alt="dhishna Image" className="object-contain" />
                        </div>
                        <div className='bg-white flex flex-col justify-center items-center md:w-1/4 w-1/2 md:ml-0 ml-20 mt-3 p-4'>
                            <img height="100" src='/assets/tinkerhub.png' className="object-contain" alt="TinkerHub Image" />
                        </div>
                        <div className=' flex flex-col justify-center items-center md:w-1/4 w-1/2 md:ml-0 ml-20 mt-3 p-4'>
                            <img height="100" src='/assets/ieee cusat sb.png' className="object-contain" alt="IEEE CUSAT SB Image" />
                        </div>
                        <div className='bg-white flex flex-col justify-center items-center md:w-1/4 w-1/2 md:ml-0 ml-20 mt-3 p-4'>
                            <img height="100" src='/assets/gdsc cusat.png' className="object-contain" alt="GDSC CUSAT Image" />
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default sponsor
