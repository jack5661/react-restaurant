import React,{Component} from 'react';
import "./NavBar.css";

class Navbar extends Component {
    render() {
        return (<div className = "NavBar">
                <ul className = "Tabs">
                    <li onClick = {this.props.tabContact}>Contact</li>
                    <li onClick = {this.props.tabMenu}>Menu</li>
                    <li onClick = {this.props.tabHome} style = {{float: "left"}}>Home</li>
                </ul>
            </div>
        );
    }
}


export default Navbar; 
