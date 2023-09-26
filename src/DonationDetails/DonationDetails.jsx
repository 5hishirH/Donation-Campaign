import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom";
import DonationAlt from "./DonationAlt";

const DonationDetails = () => {
    const [donation, setDonation] = useState({});

    const {id} = useParams();

    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations?.find((donation) => donation.id == id);

        setDonation(findDonation);
    }, [id, donations]);

    console.log(donation);

    return (
        <div>
            <DonationAlt donation={donation}></DonationAlt>
        </div>
    )
}

export default DonationDetails;