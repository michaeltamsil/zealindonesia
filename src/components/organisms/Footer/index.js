import React from 'react';

export default () => {
    return (
        <div id="contact_us" className="text-center mt-4 pt-4">
            <div className="h1 roboto mb-3">
                CONTACT US
            </div>
            <a href="mailto:zealclub1@gmail.com" target="_blank">
                <i className="far fa-envelope fa-4x mr-4"></i>
            </a>
            <a href="https://www.instagram.com/zealindonesia/" target="_blank">
                <i className="fab fa-instagram fa-4x mr-4 ml-4"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6281363788777" target="_blank">
                <i className="fab fa-whatsapp fa-4x ml-4"></i>
            </a>
        </div>
    )
}