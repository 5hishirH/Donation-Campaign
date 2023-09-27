import DonationCard from "./DonationCard";

const Cards = ({cardData}) => {
    return (
        <div className="w-11/12 my-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {
                cardData?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
        </div>
    )
}

export default Cards;