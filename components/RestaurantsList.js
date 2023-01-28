import React from "react";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import {ALL_RESTAURANTS_LIST} from "../Config.js"
import RestaurantCards from "./RestaurantCards";

const RestaurantsList = () => {

//    const restaurantlist = ALL_RESTAURANTS_LIST.cards;

    const [restaurantlist, setRestList] = useState([]);

    ALL_RESTAURANTS_LIST.cards.forEach(restaurant => {
        console.log(restaurant.data);
    });

    // Use effect hook takes a function argument
    // it will call this function depending on the second argument of useeffect hook
    useEffect(()=>{
        console.log("RestaurantList useeffect");

        let rlist = [];
        ALL_RESTAURANTS_LIST.cards.forEach(restaurant => {
            console.log(restaurant.data);
            rlist.push(restaurant.data);
        });
        if (rlist.length)
            setRestList(rlist);

        // useeffect is called later than the other code.
        // useeffect will update the latest restaurant list
        // SO its better to update a state from useeffect so that the re-render is called 
        // 

        // Call API to get list of all restauants
        // const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.59937&lng=73.900618&page_type=DESKTOP_WEB_LISTING";
        // const url1 = "https://www.swiggy.com/dapi/menu/v4/full?lat=18.59937&lng=73.900618&menuId=22472";
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(url1,{
        //             mode:'no-cors'
        //         });
        //         const json = await response.json();
        //         console.log(json);
        //     } catch (error) {
        //         console.log("error", error);
        //     }
        // };
        // fetchData();

    },[]) 

    if (restaurantlist.length) {
        let names = [];
        restaurantlist.forEach((restaurant)=>{
            names.push(restaurant.name);
        })
        var cards = restaurantlist.map((r)=>{
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

    // return (
    //     <>
    //     {/* List of all restaurants near me */}
    //     <Shimmer/>

    //     </>
    // )

}

export default RestaurantsList;

