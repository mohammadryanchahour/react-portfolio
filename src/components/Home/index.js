import { Link } from "react-router-dom";
import LogoTitle from '../../assets/images/logo.png';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src = {LogoTitle} alt="Developer" />
                ohammad <span>RYAN</span>
                <br /> 
                Web Developer
                </h1>
                <h2>Full-Stack Developer / Redbubble Designer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;