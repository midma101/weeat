import React, { PropTypes } from 'react';

var onSubmitConfirmation = function (e) {
    if (!confirm('Are you sure you want to delete?')){
        e.preventDefault();
    }
}

var Restaurant = function (props) {
    var ratingStars = "";
    var actionPath = "/restaurants/" + props.name;
    for (var i = 0; i < props.rating; i++){
        ratingStars += '★';
    }
    return (
        <div className="restaurant">
            <div className="restaurant-name">
                { props.name }
            </div>
            <br />
            <div className="cuisine-rating">
                { props.cuisine } {ratingStars}
            </div>
            <div className="address">
                Address: {props.address}
            </div>
            <div className="max-delivery-time">
                Max Delivery Time: {props.max_delivery_time}
            </div>
            { props.ten_bis && <img className="ten-bis-img" src="http://ipos.co.il/media/17833/10bis.bmp" />}
            { props.ten_bis }
            <form className="delete-button" method="post" action={actionPath} onSubmit={onSubmitConfirmation}>
                <input type="hidden" name="_method" value="delete" />
                <input type="submit" value="Delete"/>
            </form>
        </div>
    )
}

export default Restaurant