import React, { PropTypes } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ratingMarks = {
    0: {
        style: {
            color: 'white',
        },
        label: '0',
    },
    1: {
        style: {
            color: 'white',
        },
        label: '1',
    },
    2: {
        style: {
            color: 'white',
        },
        label: '2',
    },
    3: {
        style: {
            color: 'white',
        },
        label: '3',
    },
    4: {
        style: {
            color: 'white',
        },
        label: '4',
    },
    5: {
        style: {
            color: 'white',
        },
        label: '5',
    }
};

const timeMarks = {
    0: {
        style: {
            color: 'white',
        },
        label: '0',
    },
    10: {
        style: {
            color: 'white',
        },
        label: '10',
    },
    20: {
        style: {
            color: 'white',
        },
        label: '20',
    },
    30: {
        style: {
            color: 'white',
        },
        label: '30',
    },
    40: {
        style: {
            color: 'white',
        },
        label: '40',
    },
    50: {
        style: {
            color: 'white',
        },
        label: '50',
    },
    60: {
        style: {
            color: 'white',
        },
        label: '60',
    },
    70: {
        style: {
            color: 'white',
        },
        label: '70',
    },
    80: {
        style: {
            color: 'white',
        },
        label: '80',
    },
    90: {
        style: {
            color: 'white',
        },
        label: '90',
    }
};

var CuisineFilter = function(props) {
    return (
        <input placeholder="filter" onChange={props.filterMethod} value={props.filterValue} />
    )
}

var RatingFilter = function(props) {
    return (
        <Slider className="slider" min={0} max={5} dots={true} onChange={props.filterMethod} marks={ratingMarks} />
    )
}

var TimeFilter = function(props) {
    return (
        <Slider className="slider" min={0} max={90} dots={true} step={10} onChange={props.filterMethod}
                marks={timeMarks} defaultValue={90} />
    )
}

class FilterView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cuisineFilterValue: props.cuisineFilterValue, onCuisineFilterChange: props.onCuisineFilterChange,
            onRatingFilterChange: props.onRatingFilterChange, onTimeFilterChange: props.onTimeFilterChange};
    }

    render() {
        return <div className="filter-view">
                    <div className="filter-container">
                        <div>Cuisine</div>
                        <CuisineFilter filterValue={this.props.cuisineFilterValue} filterMethod={this.props.onCuisineFilterChange} />
                    </div>
                    <div className="filter-container">
                        <div>Rating</div>
                        <RatingFilter filterMethod={this.props.onRatingFilterChange} />
                    </div>
                    <div className="filter-container">
                        <div>Max Delivery Time</div>
                        <TimeFilter filterMethod={this.props.onTimeFilterChange} />
                    </div>
                </div>
            }
}

export default FilterView