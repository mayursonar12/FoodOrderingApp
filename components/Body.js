import RestaurantsList from "./RestaurantsList"
import {Context } from "./Context.js"
import { useState } from "react";


const Body = () => {
    const[searchText, setSearchText] = useState("");
    const[restaurantList, setRestaurantList] = useState([]);
    const[filteredRestoList, setFilteredRestoList] = useState([]);

    onSearchTextChange = (e) => {
        setSearchText(e.target.value);

        if (e.target.value.length > 2){
            let filteredList = restaurantList.filter((restaurantInfo)=>{
                // Extract name of each restaurant.
                // Match that name against the search string
                let match = restaurantInfo.name.match(new RegExp(e.target.value,"i"));
                if (match) return restaurantInfo;
            });
            console.log(filteredList);
            setFilteredRestoList(filteredList);
        } else {
            setFilteredRestoList(restaurantList);
        }
    }

    onSearchBtnClick = () => {
        // console.log(searchText);
        // console.log(restaurantList);

        let filteredList = restaurantList.filter((restaurantInfo)=>{
            // Extract name of each restaurant.
            // Match that name against the search string
            let match = restaurantInfo.name.match(new RegExp(searchText,"i"));
            if (match) return restaurantInfo;
        });
        console.log(filteredList);
        setFilteredRestoList(filteredList);
    }

    return (
        <>
            {/* This body component should display all restaaurnts near me */}
            <div className="search">
                <input value={searchText} onChange={onSearchTextChange} type="text" placeholder="Search"></input>
                <button onClick={onSearchBtnClick}>Search</button> 
            </div>
            <Context.Provider value={{restaurantList, filteredRestoList, setRestaurantList}}>
                <RestaurantsList/>
            </Context.Provider>
        </>
    )
}

export default Body;
