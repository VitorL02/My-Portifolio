import AboutContainer from './AboutContainer'
import TecnoContainer from './TecnoContainer'
import ProjectsContainer from './ProjectsContainer'


import '../styles/components/maincontent.sass'
import '../box.css'

const MainContent = () => {
  return (
    <div id="main-content" className='elevation'>
      <AboutContainer />
      <TecnoContainer />
      <ProjectsContainer />
    </div>
  )
}

export default MainContent