import React from "react";
import "./Home.css";
import "./styles.css";

class Home extends React.Component {
    render () {
        const pic = require('./assets/buffet.jpeg');

        return (<div className = "Box">
                <h1 className = "Title">Welcome to the Restaurant!</h1>
                <h2 className = "Subtitle">About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis vestibulum neque at tincidunt ultricies. Orci varius natoque penatibus et magnis 
                    dis parturient montes, nascetur ridiculus mus. Phasellus imperdiet gravida enim. Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lacus nulla, eu 
                    rutrum ante egestas sed. Nunc tincidunt eros sit amet ipsum blandit, eu fringilla neque auctor. 
                    Aenean sapien sapien, posuere eget dolor non, pretium viverra turpis. Curabitur ultricies bibendum 
                    velit, vel convallis sem fermentum vel. Donec nibh metus, interdum non consequat non, auctor a libero. 
                    Nullam condimentum fringilla consequat. Aenean nec auctor sapien. Duis mollis quam felis, ac lobortis lorem 
                    molestie id. Suspendisse potenti. Aliquam varius ipsum nec gravida mollis. Nunc eu auctor enim. 
                </p>
                <img className = "Buffet" src = {pic}/>
            </div>
        );
    }
}

export default Home;
