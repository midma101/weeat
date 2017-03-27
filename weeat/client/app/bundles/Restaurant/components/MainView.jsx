import React, { PropTypes } from 'react';
import FilterView from './FilterView';
import RestaurantListView from './RestaurantList';
import MapView from './Map';
import Modal from './ModalView';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {restaurants: props.restaurants, new_restaurant_path: props.new_restaurant_path,
            cuisineFilterValue: "", ratingFilterValue: 0, timeFilterValue: 90};
    }

    onCuisineFilterChange(event) {
        this.setState({"cuisineFilterValue": event.target.value});
    }

    onRatingFilterChange(value) {
        this.setState({"ratingFilterValue": value});
    }

    onTimeFilterChange(value) {
        this.setState({"timeFilterValue": value});
    }

    render() {
        return <div className="mainView">
                    <FilterView cuisineFilterValue={this.state.cuisineFilterValue}
                                onCuisineFilterChange={this.onCuisineFilterChange.bind(this)}
                                onRatingFilterChange={this.onRatingFilterChange.bind(this)}
                                onTimeFilterChange={this.onTimeFilterChange.bind(this)} />

                    <div className="row">
                        <RestaurantListView className="list-container" restaurants={this.state.restaurants}
                        cuisineFilterValue={this.state.cuisineFilterValue} ratingFilterValue={this.state.ratingFilterValue}
                        timeFilterValue={this.state.timeFilterValue} />
                        <MapView google={window.google} />
                    </div>
            </div>
        }
}

export default MainView