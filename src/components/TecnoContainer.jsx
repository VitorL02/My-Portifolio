import { DiGithubBadge, DiNodejsSmall, DiJsBadge, DiDart, DiBitbucket, DiBootstrap, DiAngularSimple, DiSass, DiMysql, DiPhp, DiCss3, DiHtml5, DiReact } from "react-icons/di";
import '../styles/components/tecnocontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "github", name: "GITHUB", icon: <DiGithubBadge /> },
    { id: "nodejs", name: "NODEJS", icon: <DiNodejsSmall /> },
    { id: "javascript", name: "JAVASCRIPT", icon: <DiJsBadge /> },
    { id: "dart", name: "DART", icon: <DiDart /> },
    { id: "bitbucket", name: "BITBUCKET", icon: <DiBitbucket /> },
    { id: "bootstrap", name: "BOOTSTRAP", icon: <DiBootstrap /> },
    { id: "angular", name: "ANGULAR", icon: <DiAngularSimple /> },
    { id: "sass", name: "SASS", icon: <DiSass /> },
    { id: "mysql", name: "MYSQL", icon: <DiMysql /> },
    { id: "php", name: "PHP", icon: <DiPhp /> },
    { id: "react", name: "REACT", icon: <DiReact /> },
]

const TecnoContainer = () => {
    return (
        <section className="tecno-container">
            <h2>Tecnologias</h2>
            <div className="tecno-grid">
                {technologies.map((tech) => (
                    <div className="tecno-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tecno-info">
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnoContainer