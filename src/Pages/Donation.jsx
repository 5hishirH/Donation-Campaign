import { useEffect } from "react";
import { useState } from "react";
import DonationCardAlt from "../Components/Cards/DonationCardAlt";

const Donation = () => {
    const [donates, setDonates] = useState([]);

    const [noFound, setNoFound] = useState(false);


    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donateSector = JSON.parse(localStorage.getItem('linkon'));

        if(donateSector) {
            setDonates(donateSector);
        }
        else {
            setNoFound("No data found");
        }
    }, []);
    return (
        <div className="mt-20 w-11/12 mx-auto">
            {noFound ? <p>{noFound}</p> 
            :
            <div className="grid grid-cols-2 gap-6">
                {
                    isShow ? donates.map(donate => <DonationCardAlt key={donate.id} donate={donate}></DonationCardAlt>)
                    : donates.slice(0,4).map(donate => <DonationCardAlt key={donate.id} donate={donate}></DonationCardAlt>)
                }
            </div>}

            {
                donates.length > 4 ? 
                <div className="flex justify-center my-10">
                <button onClick={()=>setIsShow(!isShow)} className="mx-auto px-4 py-2 text-white bg-green-500 font-semibold rounded w-fit">See All</button>
            </div> : <div className="mb-10"></div>
            }

            
        </div>
    )
}

export default Donation;