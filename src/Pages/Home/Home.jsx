import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";

const Home = () => {

    const phones = useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    <Phones phones={phones}></Phones>
                }
            </div>
        </div>
    );
};

export default Home;