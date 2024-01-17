const RestaurantContainer = ({resData}) => {
    const {name} =  resData?.info
    return (
        <div>
            <h2>{name}</h2> 
        </div>
    )
};

export default RestaurantContainer;