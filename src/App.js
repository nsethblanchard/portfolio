import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import ECActivities from './components/ECActivities'
import Projects from './components/Projects'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={Home} exact path="/"/> 
        <Route component={About} path="/about"/> 
        <Route component={SinglePost} path="/post/:slug"/> 
        <Route component={ECActivities} path="/activities"/> 
        <Route component={Projects} path="/projects"/> 
      </Switch>
    </BrowserRouter>
  )

}

export default App;
