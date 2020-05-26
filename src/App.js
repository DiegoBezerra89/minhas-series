import React from 'react'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => <h1>Home!</h1>

const Favoritos = () => <h1>Favoritos!</h1>

const App = () => {
  return(
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/favoritos' component={Favoritos} />
      </div>
    </Router>
  )
}

export default App