import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function FooterComponent(){
    return (
        <footer className="footer">
            <div>
                <div>
                    <img src="images/logo.svg" alt="" />
                    <div className="footer-inner-row">
                        <div>
                            <img src="images/icon-location.svg" alt="" />
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                    <div className="footer-inner-row">
                        <div>
                            <img src="images/icon-phone.svg" alt="" />
                        </div>
                        <div>
                            <p>
                                +1-543-123-4567
                            </p>
                        </div>
                    </div>
                    <div className="footer-inner-row">
                        <div>
                            <img src="images/icon-email.svg" alt="" />
                        </div>
                        <div>
                            <p>
                                example@fylo.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-second-div">
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className="footer-third-div">
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='socials'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    )
} 