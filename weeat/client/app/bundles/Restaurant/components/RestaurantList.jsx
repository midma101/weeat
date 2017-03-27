import React, { PropTypes } from 'react';
import Restaurant from './Restaurant';

var filterList = function (list, cuisineFilterValue, ratingFilterValue, timeFilterValue) {
    return list.filter(function (item) {
        if (item.cuisine.toLowerCase().includes(cuisineFilterValue.toLowerCase())
        && item.rating >= ratingFilterValue && item.max_delivery_time <= timeFilterValue){
            return item;
        }
    });
}

var RestaurantListView = function(props)
{
    return (
        <div>
            <div className="restaurant-list">
                { props.restaurants.map(function (restaurant) {
                    return <Restaurant key={restaurant.name} name={ restaurant.name } cuisine={ restaurant.cuisine }
                                       rating={ restaurant.rating } address={restaurant.address} ten_bis={restaurant.ten_bis}
                                       max_delivery_time={restaurant.max_delivery_time} id={restaurant.id}/>

                })}
            </div>
        </div>
    )
}

class RestaurantList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cuisineFilterValue: props.cuisineFilterValue, ratingFilterValue: props.ratingFilterValue,
            timeFilterValue: props.timeFilterValue};
    }

    render() {
        var restaurantNodes = filterList(this.props.restaurants, this.props.cuisineFilterValue, this.props.ratingFilterValue, this.props.timeFilterValue);
        for (var i = 1;i < restaurantNodes.length + 1; i++) {
            restaurantNodes[i - 1].id = i;
        }
        return <RestaurantListView restaurants={restaurantNodes} />
    }
}

export default RestaurantList