import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './componentes/AboutMe'
import Contact from './componentes/Contact'
import Home from './componentes/Home'
import { Projects } from './componentes/Projects'
import { Link } from 'react-router-dom'
import Error404 from './componentes/Error404'
import CharacterId from './componentes/CharacterId'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <ul>
        <li><Link to='/'>Go to Home</Link></li>
        <li><Link to='/aboutme'>Aboutme</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
           
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/aboutme' element= {<AboutMe />}/>
          <Route path='/projects' element= {<Projects />}/>
          <Route path='/contact' element= {<Contact />}/>
          <Route path='*'element= {<Error404 />}/>
          <Route path='/character/:id' element={<CharacterId /> }/>
        </Routes>
        <footer>
          <h3>Soy el Footer</h3>
        </footer>
    </div>
  )
}

export default App
