import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/styles.scss'

import Home from './pages/Home'
import HasMovement from './components/Questions/HasMovement'
import IsFasts from './components/Questions/IsFasts'
import IsDiffuse from './components/Questions/IsDiffuse'
import IsSoFast from './components/Questions/IsSoFast'
import Blinks from './components/Questions/Blinks'
import Result from './pages/Result'
import BrightnessIncrease from './components/Questions/BrightnessIncrease'
import HasTail from './components/Questions/HasTail'
import Flicker from './components/Questions/Flicker'
import Lost from './pages/Lost'
import Layout from './pages/Layout'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Layout>
        <Route exact path="/has-movement" component={HasMovement} />
        <Route exact path="/is-fast" component={IsFasts} />
        <Route exact path="/is-diffuse" component={IsDiffuse} />
        <Route exact path="/is-so-fast" component={IsSoFast} />
        <Route exact path="/blinks" component={Blinks} />
        <Route exact path="/brightness-increase" component={BrightnessIncrease} />
        <Route exact path="/has-tail" component={HasTail} />
        <Route exact path="/flicker" component={Flicker} />
        <Route exact path="/result" component={Result} />
      </Layout>
      <Route component={Lost} />
    </Switch>
  </BrowserRouter>
)

export default App
