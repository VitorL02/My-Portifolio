import Avatar from '../img/Vitor.jpg';
import '../styles/components/sidebar.sass'
import '../box.css'
import SocialNetworks from './SocialNetworks';

const SideBar = () => {
    return (
        <aside id="sidebar" className='elevation'>
            <img src={Avatar} alt="Vitor Lucas Crispim" />
            <p className="title elevation">Junior Developer</p>
            <SocialNetworks />
            <a href="" className="btn elevation">
                Download do Curriculo
            </a>
        </aside>
    )
}

export default SideBar