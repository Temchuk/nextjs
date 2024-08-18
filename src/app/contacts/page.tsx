
import React from 'react';
import contactsPage from './Contacts.module.css';

const ContactsPage = () => {
    return (
     <div>
          <div className={contactsPage.contactsPage}>

            <div className={contactsPage.infoSection}>
                <h1 className={contactsPage.title}>Contact Us</h1>
                <p className={contactsPage.contactsParagrah}><strong>Phone:</strong> +8801742-527137</p>
                <p className={contactsPage.contactsParagrah}><strong>Email:</strong> mdmaksedur17@gmail.com</p>
                <p className={contactsPage.contactsParagrah}><strong>Address:</strong> Novoyavorivsk, Lviv Region</p>

                <p className={contactsPage.contactsParagrah}><strong>Follow us:</strong></p>
                <div className={contactsPage.socialLinks}>
                    <a href="#">
                        <img src="/Facebook.png" alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src="/Instagram.png" alt="Instagram" />
                    </a>
                    <a href="#">
                        <img src="/Linkdin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>

            <div className={contactsPage.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25799.973209704616!2d23.568358731751688!3d49.93849430626474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b1dd50142ad29%3A0x1cf4b8e9d407507e!2z0KHQstC-0LvQuNC00LAg0J3QvtCy0LDRgdGM0LrQsCDQp9C-0LvQv9C-0LrQvtC8!5e0!3m2!1suk!2sua!4v1687874727015!5m2!1suk!2sua"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>
        </div>
    );
};

export default ContactsPage;


