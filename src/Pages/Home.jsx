import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import Cards from "../Components/Cards/Cards";

const Home = () => {
    const cardData = useLoaderData();

    return(
        <div>
            <Banner></Banner>
            <Cards cardData = {cardData}></Cards>
        </div>
    )
}

export default Home;