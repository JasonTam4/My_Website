import React from "react";
import "./contact.css";

const Contact = () => {
    return (
    <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
            <div className="contact-item email">
                <div className="icon email-icon"></div>
                <p>Email</p>
                <a href="mailto:jtam249@uwo.ca" className="contact-info">jtam249@uwo.ca</a>
            </div>
            <div className="contact-item phone">
                <div className="icon phone-icon"></div>
                <p>Phone</p>
                <a href="tel:+16478555548" className="contact-info">+1 (647) 855-5548</a>
            </div>
        </div>
    </section>
    );
};

export default Contact;