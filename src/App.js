import React, { useEffect, useState } from 'react'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import Favoritos from './Favoritos'
import Generos from './Generos'
import Home from './Home'
import Lancamentos from './Lancamentos'
import QueroAssistir from './QueroAssistir'

const App = () => {
  const [data, setData] = useState({})
  useEffect(()  => {
    console.log('rodou')
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return(
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' component={Generos} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/lancamentos' component={Lancamentos} />
        <Route path='/quero-assistir' component={QueroAssistir} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  )
}

export default App