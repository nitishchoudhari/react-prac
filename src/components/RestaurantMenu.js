import { useEffect } from "react"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resID } = useParams()

    // useEffect(()=>{
    //     fetchData();
    // }, [])


    // const fetchData = async () => {
    //     const data =  await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.233318112726874&lng=72.97126818448305&restaurantId='+ resID + '&catalog_qa=undefined&submitAction=ENTER');
    //     const json = await data.json();
    //     console.log('this is json data', json);
    // }


    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Pizza</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu