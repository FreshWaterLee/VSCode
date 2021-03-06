import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navar />
        <Switch>
          <Route exact path = '/' component={Dashboard} />
          <Route path = '/project/:id' component={ProjectDetails} />
          <Route path = '/signin' component={SignIn} />
          <Route path = '/signup' component={SignUp} />
          <Route path = '/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
