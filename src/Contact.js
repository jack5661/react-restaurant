import React from "react";
import "./styles.css";
import "./Contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div className = "Box">
                <h1 className = "Title">Contact Us</h1>
                <div className = "Container">
                    {FeedbackForm()}
                    <div className = "ContactInfo">
                        <h3>Address</h3>
                        <h4>XXXX Main St, Vancouver, XXX - XXX</h4>
                        <h3>Phone Number</h3>
                        <h4>(XXX) - XXX - XXXX</h4>
                        <h3>Email</h3>
                        <h4>info@restaurant.ca</h4>
                    </div>
                </div>

            </div>
        );
    
    }
}

function FeedbackForm() {
    return (
        <div class = "CommentBox">
            <input placeholder = "Name" type = "text"/>
            <input placeholder = "Email" type = "email"/>
            <textarea placeholder = "Feedback/Questions/Concerns"/>
            <button type = "button">Submit</button>
        </div>
    );
}

export default Contact;