import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to={'/'}>
            <img src={Logo} alt="Logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#38B6ff"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#38B6ff"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#38B6ff"></FontAwesomeIcon>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mohammad-ryan/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#38B6FF" />
                </a>    
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mohammadryanchahour'>
                    <FontAwesomeIcon icon={faGithub} color="#38B6FF" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;