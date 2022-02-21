import React from "react";
import RenderItemData from "./renderItemData";
import "./styles.css";

export default function RenderProductData(props){
    return(
        <div>
            {props.data.map((item) => {
                return(
                    <div className="product-box">
                        <h1 className="category">{item.category.name}</h1>
                        <div className="parent-item-box">
                            {item.items.map((productData) => {
                                return <RenderItemData data = {productData} />;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}