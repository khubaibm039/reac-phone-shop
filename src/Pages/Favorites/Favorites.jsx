import { useEffect } from "react";
import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [noData, setNoData] = useState('');
    const [show, setShow] = useState(false)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));
        if (favoritesItems) {
            setFavorites(favoritesItems)
            const price = favoritesItems.reduce((preValue, newValue) => preValue + newValue.price, 0);
            setTotal(price)
        }
        else {
            setNoData('No Data Found');
        }
    }, [])

    const handleDeleteBtn = () => {
        localStorage.clear();
        setFavorites([])
        setNoData('No Data Found');

    }
    return <div>
        {
            noData ? <p className="flex justify-center h-screen items-center">{noData}</p>
                :
                <div>
                    <h3 className="text-3xl font-bold py-6">Total Price : {total} $ </h3>
                    <div className="flex justify-center py-10">
                        {
                            favorites.length > 0 && <button onClick={handleDeleteBtn} className="bg-green-400 p-4 rounded-lg">Delete all items</button>
                        }
                    </div>
                    {
                        show ? <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                            {favorites.map((favCard, idx) => <FavoriteCard key={idx} favCard={favCard}></FavoriteCard>)}
                        </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                            {favorites.slice(0, 2).map((favCard, idx) => <FavoriteCard key={idx} favCard={favCard}></FavoriteCard>)}
                        </div>
                    }

                    <div className='flex justify-center my-10'>
                        <button onClick={() => setShow(!show)}
                            className='p-4 rounded-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold text-xl'>
                            {show ? 'see less' : 'see more'}
                        </button>
                    </div>
                </div>
        }
    </div >

};

export default Favorites;