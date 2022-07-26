import '../styles/components/projects.css'

const projects = [
    { id: "mytimerjs", name: "My Timer Js", github: "https://github.com/VitorL02/My_Timer_Js", description: "Um cronometro de Feito em JavaScript" },
    { id: "schedulesApp", name: "SchedulesApp", github: "https://github.com/VitorL02/SchedulesApp", description: "Um sistema feito para o gerenciamento de agendamentos do Salão Arca da Aliança" },
    { id: "todolistjs", name: "TodoList JS", github: "https://github.com/VitorL02/TodoList_Js", description: "Um sistema feito utilizando js puro utilizando conceitos do localStorage e Jsonstringify" },
    { id: "pokedex", name: "Pokedex", github: "https://github.com/VitorL02/Pokedex", description: "Uma Pokedex feita utilizando o framework Flutter com o pacote dio para consumir a PokeApi" },
    { id: "cadastrousuarios", name: "Cadastro_Usuarios", github: "https://github.com/VitorL02/Cadastro_Usuarios", description: "Uma sistema de cadastro feito com Php Mysql e HTML + CSS + JS que se baseia num simples crud" },
    { id: "parallax", name: "Parallax", github: "https://github.com/VitorL02/Parallax", description: "Para aprender sobre o efeito parallax fiz ess projeto que utiliza o height 100% para dar efeito as imagens" },
];


const Projects = () => {
    return (
        <section className="projects">
            {projects.map((project) => (
                <div className="card" key={project.id}>
                    <div className="face face1">
                        <div className="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" alt={project.name} />
                            <h3>{project.name}</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>{project.description}</p>
                            <a href={project.github}>Visite o Projeto</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects


/* <div class="card">
<div class="face face1">
    <div class="content">
        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true">
        <h3>Code</h3>
    </div>
</div>
<div class="face face2">
    <div class="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
            <a href="#">Read More</a>
    </div>
</div>
</div> */