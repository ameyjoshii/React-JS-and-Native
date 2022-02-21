import React from "react";

export default function RenderItemData(props) {
    return(
        <div className="item-box">
            <img src= {props.data.thumbnail_url}/>
            <h3>{props.data.name}</h3>
            <p className="price">
                <span className="old-price">Rs. {props.data.price}</span>
                <span className="new-price">Rs. {props.data.discounted_price}</span>
            </p>
        </div>
    );
}