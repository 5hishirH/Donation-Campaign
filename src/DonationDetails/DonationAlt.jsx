import React from "react";
import swal from 'sweetalert';

const DonationAlt = ({donation}) => {
    const {id, image, category, title, description, price, cardBg, categoryBg, font_color} = donation || {}

    let addedId = [];

    const addToDonation = () => {
        console.log(donation);

        const addedDonationArr = [];
        
        const donationStorage = JSON.parse(localStorage.getItem('linkon'));

        // addedDonationArr.push(donation);

        if(!donationStorage) {
            addedId.push(id);
            addedDonationArr.push(donation)
            localStorage.setItem('linkon', JSON.stringify(addedDonationArr));
            console.log(donationStorage);
            swal("Thank You", "For your donation", "success");
        }
        else {
            const isExits = donationStorage.find(donate=>donate.id === id);
            console.log(isExits);

            if(!isExits) {
                addedId.push(id);
                addedDonationArr.push(...donationStorage, donation);
                localStorage.setItem('linkon', JSON.stringify(addedDonationArr));
                swal("Thank You", "For your donation", "success");
            }
            else {
                swal("Already donated", "Please donate in another sector", "error");
            }
        }

    }


    return (
        <div>
            <div style={{backgroundImage: `url(${image})`}} className="w-11/12 h-[50rem] mx-auto mt-20 bg-cover bg-center flex flex-col justify-end rounded">
                <div className="bg-[#0b0b0b80]">
                    <button style={{backgroundColor: font_color}} className="my-8 ml-9 px-6 py-4 text-white rounded" onClick={addToDonation}>Donate $290</button>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-14">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="mt-6 text-[#0b0b0bb3] text-justify">{description}</p>
            </div>
        </div>
    )
}

export default DonationAlt;