
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';
import '../box.css'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/vitorlucascrispim/' },
    { name: "github", icon: <FaGithub />, link: 'https://github.com/VitorL02' },
    { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/vitor_lucas3/' }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn elevation-socialbutton" id={network.name} key={network.name} >
                    {network.icon}
                </a>
            ))}
        </section>
    );
}

export default SocialNetworks