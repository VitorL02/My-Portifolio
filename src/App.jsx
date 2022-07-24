import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import './styles/components/app.sass';


function App() {

  return (
    <div id="portifolio">
      <h1 className='elevation-name-text'>Vitor Lucas Crispim</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
