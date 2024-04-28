
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
        <div className="container-fluid my-5">
            <footer style={{ background: 'rgba(37, 22, 111, 1)' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h5 className="mb-4" style={{ letterSpacing: '2px', color: 'white' }}>Premier Nursing College</h5>
                            <p style={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                                atque cumque eum delectus sint!
                            </p>
                            <p className='mb-4' style={{ color: 'white' }}>+2338096542356 <br />
                                info@premeirnursingcollege.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="mb-3" style={{ letterSpacing: '2px', color: 'white' }}>Quick links</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">
                                    <a href="/Programs" style={{ color: 'white', textDecoration: 'none' }}>Programs</a>
                                </li>
                                <li className="mb-1">
                                    <a href="Admissions" style={{ color: 'white', textDecoration: 'none' }}>Admissions</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#!" style={{ color: 'white', textDecoration: 'none' }}>Faculty</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#!" style={{ color: 'white', textDecoration: 'none' }}>Staff</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#!" style={{ color: 'white', textDecoration: 'none' }}>Student Portal</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/Gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a>
                                </li>
                                <li className="mb-1">
                                    <a href="News" style={{ color: 'white', textDecoration: 'none' }}>News</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/Events" style={{ color: 'white', textDecoration: 'none' }}>Events</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="d-flex justify-content-around">
                                <a href="#!" style={{ color: 'white', marginRight: '10px' }}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#!" style={{ color: 'white', marginRight: '10px' }}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#!" style={{ color: 'white', marginRight: '10px' }}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#!" style={{ color: 'white', marginRight: '10px' }}>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
                    <p>© Premier Nursing College 2023</p>
                </div>
            </footer>
        </div>
    </div>
    
    );
}

export default Footer;

  