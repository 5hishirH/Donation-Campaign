// import React from "react";
import swal from 'sweetalert';

const DonationAlt = ({donation}) => {
    const {id, image, category, title, description, price, cardBg, categoryBg, font_color} = donation || {}


    // const addToDonation = () => {
    //     const addedDonationsArr = [];

    //     const donatedSectors = JSON.parse(localStorage.getItem('donations'));

    //     if(!donatedSectors) {
    //         addedDonationsArr.push(donation);
    //         localStorage.setItem('donations', JSON.stringify(addedDonationsArr));
    //         swal("Good job!", "You clicked the button!", "success");
    //     }
    //     else {
    //         const isExit = donatedSectors.find(donate => donate.id === id);

    //         if(isExit){
    //             addedDonationsArr.push(...donatedSectors, donation);
    //             localStorage.setItem('donations', JSON.stringify(addedDonationsArr));

    //             swal("Good job!", "You clicked the button!", "success");
    //         }
    //         else {
    //             swal("Good job!", "You clicked the button!", "success");
    //         }
    //     }
    // }


    return (
        <div>
            <div style={{backgroundImage: `url(${image})`}} className="w-11/12 h-[50rem] mx-auto mt-20 bg-cover bg-center flex flex-col justify-end rounded">
                <div className="bg-[#0b0b0b80]">
                    <button style={{backgroundColor: font_color}} className="my-8 ml-9 px-6 py-4 text-white rounded" onClick={() => {
                        const addedDonationsArr = [];

                        const donatedSectors = JSON.parse(localStorage.getItem('donations'));
                
                        if(!donatedSectors) {
                            addedDonationsArr.push(donation);
                            localStorage.setItem('donations', JSON.stringify(addedDonationsArr));
                            swal("Good job!", "You clicked the button!", "success");
                        }
                        else {
                            const isExit = donatedSectors.find(donate => donate.id === id);
                
                            if(isExit){
                                addedDonationsArr.push(...donatedSectors, donation);
                                localStorage.setItem('donations', JSON.stringify(addedDonationsArr));
                
                                swal("Good job!", "You clicked the button!", "success");
                            }
                            else {
                                swal("Error!", "Duplicate entry!", "error");
                            }
                        }
                    }}>Donate $290</button>
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