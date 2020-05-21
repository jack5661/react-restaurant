import React from "react";
import "./Menu.css";

class MenuCard extends React.Component {
    render() {
        return (
            <div className = 'MenuCard'>
                <img src = {this.props.pic}/>
                <h3 class = "FoodTitle">{this.props.title}</h3>
                <h3>{this.props.price}</h3>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default MenuCard;
