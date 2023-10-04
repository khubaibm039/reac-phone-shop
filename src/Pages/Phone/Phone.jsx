import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Phone = () => {
    const [phone, setPhone] = useState([])
    const { id } = useParams()
    const phones = useLoaderData()



    useEffect(() => {
        const findPhone = phones.find(phone => phone.id === id)
        setPhone(findPhone)
    }, [id, phones])


    return (
        <div>
            <h2>phone Details : {id}</h2>
            <div className="flex justify-center">
                <Card phone={phone}></Card>
            </div>
        </div>
    );
};

export default Phone;