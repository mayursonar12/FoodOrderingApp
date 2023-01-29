import React from "react";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Context } from "./Context";
import {ALL_RESTAURANTS_LIST} from "../Config.js"
import RestaurantCards from "./RestaurantCards";

const RestaurantsList = () => {

//    const restaurantlist = ALL_RESTAURANTS_LIST.cards;
    const Contexts = useContext(Context);
    console.log(Contexts);

    // // Since we are now using Context to get the parent state variables.
    // // We will discontinue to use local state variables
    // const [restaurantlist, setRestList] = useState([]);

    // Use effect hook takes a function argument
    // it will call this function depending on the second argument of useeffect hook
    useEffect(()=>{
        console.log("RestaurantList useeffect");

        let rlist = [];
        ALL_RESTAURANTS_LIST.cards.forEach(restaurant => {
            //console.log(restaurant.data);
            rlist.push(restaurant.data);
        });
        if (rlist.length)
            Contexts.setRestaurantList(rlist);

        // useeffect is called later than the other code.
        // useeffect will update the latest restaurant list
        // SO its better to update a state from useeffect so that the re-render is called 

    },[]) 
    let restaurantList = Contexts.filteredRestoList.length ? Contexts.filteredRestoList : Contexts.restaurantList;
    if (restaurantList.length) {
        let names = [];
        restaurantList.forEach((restaurant)=>{
            names.push(restaurant.name);
        })
        var cards = restaurantList.map((r)=>{
            return (<RestaurantCards restaurant={r}/>)
        })
        
        return (
            <div className="restaurantList">
               {cards}
            </div>
        )
    } else {
        console.log("Shimmer displayed");
        return (
            <>
                <Shimmer/>
            </>
        )
    }
}
export default RestaurantsList;
