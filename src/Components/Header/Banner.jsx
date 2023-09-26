const Banner = () => {
    return(
        <div className="w-11/12 h-[31rem] mt-16 mx-auto rounded overflow-hidden relative">
            <div className="w-full h-full bg-[url('/donationBanner1.jpg')] bg-no-repeat bg-cover bg-center opacity-30">
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                banner
            </div>
        </div>
    )
}

export default Banner;