import Projects from "./Projects"


const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <Projects />
            <a href="https://github.com/VitorL02" className="btn elevation see-all-btn">Ver Todos Projetos</a>
        </section>
    )
}

export default ProjectsContainer