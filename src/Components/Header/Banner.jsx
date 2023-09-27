const Banner = () => {
    return(
        <div className="w-11/12 h-80 md:h-[31rem] mt-16 mx-auto rounded overflow-hidden relative">
            <div className="w-full h-full bg-[url('/donationBanner1.jpg')] bg-no-repeat bg-cover bg-center opacity-30">
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div>
                    <p className='text-center font-bold text-3xl mb-4'>I Grow By Helping People In Need</p>
                    <div className='border-gray-200 border-[1px] rounded-md flex items-center justify-between box-border bg-white'>
                        <div>
                            <input type="text" placeholder='Search here...' className='px-3 outline-none border-none w-52 sm:w-60 lg:w-80' />
                        </div>
                        <div className='bg-red-400 px-4 py-3 border-[1px] border-red-400 rounded-e-md'>
                            <button className='text-white font-semibold'>Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner;