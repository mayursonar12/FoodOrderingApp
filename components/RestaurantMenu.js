import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const params = useParams();
    return (
        <>
            <h1>Restaurant : {params.id}</h1>
            <h3>RestaurantMenu</h3>
        </>
    )
}

export default RestaurantMenu;
