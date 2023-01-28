import React from "react";
import { IMG_URL } from "../Config";

const RestaurantCards = (restaurant) => {
    const restaurantInfo = restaurant.restaurant;
    return (
        <>
            <div className="restaurantCard">
                <img className="imagecss" src={IMG_URL+restaurantInfo.cloudinaryImageId}/>
                <h3>{restaurantInfo.name}</h3>
                <p>{restaurantInfo.cuisines}</p>
                <p>Rating: {restaurantInfo.avgRating}</p>
            </div>
        </>
    )
}

export default RestaurantCards;