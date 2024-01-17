import RestaurantContainer from "./RestaurantContainer"
import data from "../utils/data";
import { useState, useEffect } from "react";

const Body = () => {
    const [restData, setRestData] = useState([]);
    const [filterRestData, setFilterRestData] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        setTimeout(()=>{
            setRestData(data)
            setFilterRestData(data)
            console.log(restData);
        }, 2000)
    },[])

    return (restData.length === 0) ? (<h1>Loading...</h1>) :(
        <div>
            <h1>This is Body of the page/App</h1>
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                    const filterSearch = restData.filter((restro) => {
                        console.log(restro);
                        return restro.info.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
                    })
                    setFilterRestData(filterSearch)
                }}></input>
                <button onClick={
                    () =>{
                        console.log(searchText);
                        const filterSearch = restData.filter((restro) => {
                            console.log(restro);
                            return restro.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilterRestData(filterSearch)
                }}>Search</button>
            </div>
            <button onClick= {
                () => {
                    const filteredRestaurants = restData.filter(restro => {
                        console.log(restro);
                        return restro.info.avgRating > 4.2
                    });
                    setFilterRestData(filteredRestaurants)
                }
            }> Top rated Restaurants</button>
            <div className="RestContainer">
            { 
                filterRestData.map(restro => <RestaurantContainer resData = {restro}/>)
            }
            {/* {<RestaurantContainer name="Faasos" age="24"/>} */}
            </div>
        </div>
    )
}

export default Body;