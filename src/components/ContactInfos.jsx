import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/contactinfos.sass'

const ContactInfos = () => {
    return (
        <section id="information" className="elevation-socialbutton">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(31)99280-0370</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="environment-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Contagem / Belo Horizonte - Mg</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>vitorcrispim2@yahoo.com.br</p>
                </div>
            </div>
        </section>
    )
}

export default ContactInfos