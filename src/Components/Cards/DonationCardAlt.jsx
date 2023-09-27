const DonationCardAlt = ({donate}) => {
    return (
        <div className="w-full rounded-md overflow-hidden flex" style={{color: donate.font_color, backgroundColor: donate.cardBg}}>
            <div className="h-full overflow-hidden">
                <img src={donate.image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="ml-4 h-full flex flex-col justify-center">
                <p className="text-sm font-medium px-2.5 py-1 w-min rounded mb-2" style={{backgroundColor: donate.categoryBg}}>{donate.category}</p>
                <h2 className="text-xl font-semibold mb-2">{donate.title}</h2>
                <p className="">$290.00</p>
                <button style={{backgroundColor: donate.font_color}} className="mt-4 px-4 py-2 text-white font-semibold rounded w-fit">View Details</button>
            </div>
        </div>
    )
}

export default DonationCardAlt;