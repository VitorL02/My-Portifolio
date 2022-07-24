import Avatar from '../img/Vitor.jpg';
import SocialNetworks from './SocialNetworks';
import ContactInfos from './ContactInfos';

import '../styles/components/sidebar.sass'
import '../box.css'


const SideBar = () => {
    return (
        <aside id="sidebar" className='elevation'>
            <img src={Avatar} alt="Vitor Lucas Crispim" />
            <p className="title elevation">Junior Developer</p>
            <SocialNetworks />
            <ContactInfos />
            <a href="/Profile.pdf" className="btn elevation" download>
                Download do Curriculo
            </a>
        </aside>
    )
}

export default SideBar