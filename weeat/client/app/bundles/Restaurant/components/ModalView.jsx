import React, { PropTypes } from 'react';
import Slider from 'rc-slider';
import onClickOutside from 'react-onclickoutside';

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

var RatingSlider = function(props) {
    return (
        <Slider className="slider" min={0} max={5} dots={true} onChange={props.filterMethod} marks={ratingMarks} />
    )
}

var TimeSlider = function(props) {
    return (
        <Slider className="slider" min={0} max={90} dots={true} step={10} onChange={props.filterMethod}
                marks={timeMarks} defaultValue={90} />
    )
}

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {submit_path: props.new_restaurant_path,
            showModal: false, ratingValue: 0, timeValue: 90};
    }

    openModal() {
        this.setState({showModal: true});
    }

    closeModal(form) {
        form.action = this.state.submit_path;
        this.setState({showModal: false});
    }

    handleClickOutside (event){
        this.setState({showModal: false});
    }

    render() {
        var style = {display: "inline"};

        if (!this.state.showModal) {
            style = {display: "none"};
        }

        return  <div className="modal-container">
                    <button className="new-button" onClick={this.openModal.bind(this)}>New Restaurant</button>
                    <div style={style} className="modal-window">
                        <div className="modal-content">
                            <h3>Add A New Restaurant</h3>
                            <form onSubmit={this.closeModal.bind(this)} method="post" action={this.state.submit_path}>
                                <input placeholder="Restaurant Name" name="name"/>
                                <br />
                                <input placeholder="Cuisine" name="cuisine"/>
                                <br />
                                <input placeholder="Address" name="address"/>
                                <br />
                                10Bis:
                                <input type="checkbox" name="ten_bis" />
                                <br />
                                Rating (0-5):
                                <input type="number" min="0" max="5" step="1" name="rating" />
                                <br />
                                Max Delivery Time (0-90):
                                <input type="number" min="0" max="90" step="10" name="max_delivery_time" />
                                <br />
                                <input type="submit" value="Save" />
                            </form>
                        </div>
                    </div>
                </div>

    }
}

export default onClickOutside(Modal)