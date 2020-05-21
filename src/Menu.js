import React from "react";
import "./Menu.css";
import "./styles.css";

import MenuCard from "./MenuCard";

class Menu extends React.Component {
    render() {
        return (
            <div className = "Box">
                <h2 className = "Title">Menu</h2>
                <div className = "Slideshow">
                            <div className = "MealCard">
                                <h3 className = "MealTitle">Breakfast</h3>
                                {createFoods(require("./assets/pancakes.jpeg"),
                                            "Pancakes",
                                            "$5",
                                            "Good delicious pancakes",
                                            require("./assets/fruits.jpeg"),
                                            "Fruit Salad",
                                            "$5.99",
                                            "A nice delicious fruid salad"
                                            )}
                            </div>
                            <div className = "divider"></div>
                            <div className = "MealCard">
                                <h3 className = "MealTitle">Mains</h3>
                                {createFoods(require("./assets/burgers.jpeg"),
                                            "Meat Burgers",
                                            "$6.50",
                                            "Freshly made burgers",
                                            require("./assets/burrito.jpeg"),
                                            "Meat and Veggie Burrito",
                                            "$4.99",
                                            "3 Burritos with food inside"
                                            )}
                            </div>
                            <div className = "divider"></div>
                            <div className = "MealCard">
                                <h3 className = "MealTitle">Desserts</h3>
                                {createFoods(require("./assets/icecream.jpg"),
                                            "Ice Cream",
                                            "$3.99",
                                            "Combo different flavors!",
                                            require("./assets/cake.jpeg"),
                                            "Chocolate Cake",
                                            "$3.99",
                                            "One slice of a nice cake"
                                            )}
                            </div>
                        </div>
            </div>
        );
    }
}

function createFoods(pic1, title1, price1, desc1, pic2, title2, price2, desc2) {
    return (
        <div className = "Foods">
        <MenuCard pic = {pic1} 
                    title = {title1} 
                    price = {price1} 
                    desc = {desc1} 
        />
        <MenuCard pic = {pic2}
                  title = {title2}
                  price = {price2}
                  desc = {desc2}
        />
    </div>
    );
}

export default Menu;
