import { Link } from "react-router-dom";

const DonationCard = ({card}) => {
    return (
        <div className="w-full rounded-md overflow-hidden" style={{color: card.font_color, backgroundColor: card.cardBg}}>
            <Link to={`/donate/${card.id}`}>
                <div className="h-48 overflow-hidden">
                    <img src={card.image} alt="" className="w-full h-full object-cover"/>
                </div>
                <p className="text-sm font-medium px-2.5 py-1 w-min rounded ml-4 mt-4 mb-2" style={{backgroundColor: card.categoryBg}}>{card.category}</p>
                <h2 className="text-xl font-semibold ml-4 mb-4">{card.title}</h2>
            </Link>
        </div>
    )
}

export default DonationCard;