

import React from 'react';
import Link from 'next/link';
import footer from './FooterComponent.module.css';

const FooterComponent = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.allSections}>
                <div className={footer.sections}>
                    <h3 className={footer.sectionsAddress}>Sections</h3>
                    <Link className={footer.footerSections} href='/'>Home</Link>
                    <Link className={footer.footerSections} href='/moives'>Movies</Link>
                    <Link className={footer.footerSections} href='/genres'>Genres</Link>
                </div>

                <div className={footer.sections}>
                    <h3 className={footer.sectionsAddress}>About company</h3>
                    <Link className={footer.footerSections} href='#'>About us</Link>
                    <Link className={footer.footerSections} href='/contacts'>Contacts</Link>
                    <Link className={footer.footerSections} href='#'>Privacy policy</Link>
                </div>

                <div className={footer.sections}>
                    <h3 className={footer.sectionsAddress}>Address</h3>
                    <p>Novoyavorivsk, Lviv Region<br />Ukraine</p>
                </div>

                <div className={footer.sections}>
                    <h3 className={footer.sectionsAddress}>Support</h3>
                    <div className={footer.contactInfo}>
                        <a style={{ textDecoration: 'none', color: 'inherit' }} href="tel:+8801742-527137">
                            <img src="/Telephone.png" alt="Telephone" className={footer.contactIcon} />
                            <span>+8801742-527137</span>
                        </a>
                        <a style={{ textDecoration: 'none', color: 'inherit' }} href="mailto:mdmaksedur17@gmail.com">
                            <img src="/gmail loogo.png" alt="Gmail Logo" className={footer.contactIcon} />
                            <span>mdmaksedur17@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className={footer.sections}>
                    <h3 className={footer.sectionsAddress}>Follow us at</h3>
                    <div className={footer.socialLinks}>
                        <a href="#">
                            <img src="/Facebook.png" alt="Facebook" className={footer.socialIcon} />
                        </a>
                        <a href="#">
                            <img src="/Instagram.png" alt="Instagram" className={footer.socialIcon} />
                        </a>
                        <a href="#">
                            <img src="/Linkdin.png" alt="LinkedIn" className={footer.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={footer.footerCopyright}>
                <span style={{ color: 'inherit' }}>Copyright © 2024 Movies, All rights reserved. Present by Movies.</span>
            </div>
        </footer>
    );
};

export default FooterComponent;
