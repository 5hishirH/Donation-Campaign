import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import Errorpage from "../Components/ErrorPages/Errorpage";
import DonationDetails from "../DonationDetails/DonationDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donate/:id",
                element: <DonationDetails></DonationDetails>,
                loader:  () => fetch('/donation.json')
            }
        ]
    }
])

export default myCreatedRoute;