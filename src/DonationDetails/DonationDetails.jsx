import { useLoaderData, useParams } from "react-router-dom";

const  DonationDetails = () => {
    const params = useParams();
    const donationData = useLoaderData();

    return (
        <div>
            <div style={{backgroundImage: `url(${donationData[params.id - 1].image})`}} className="w-11/12 h-[50rem] mx-auto mt-20 bg-cover bg-center flex flex-col justify-end rounded">
                <div className="bg-[#0b0b0b80]">
                    <button style={{backgroundColor: donationData[params.id - 1].font_color}} className="my-8 ml-9 px-6 py-4 text-white rounded">Donate $290</button>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-14">
                <h2 className="text-4xl font-bold">{donationData[params.id - 1].title}</h2>
                <p className="mt-6 text-[#0b0b0bb3] text-justify">{donationData[params.id - 1].description}</p>
            </div>
        </div>
    )
}

export default DonationDetails;