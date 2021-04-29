import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import AdminPage from './pages/AdminPage'; 
import ZooPage from './pages/ZooPage'; 
import MainPage from './pages/MainPage';
// import LoginPage from './pages/LoginPage';
import testpage from './pages/test';
import red_login from './pages/login_redux';
function App(){
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component={MainPage} />
          <Route path = '/Admin' component={AdminPage} />
          <Route path = '/Zoo' component={ZooPage} />
          {/* <Route path = '/login/:name' auth component={LoginPage} /> */}
          <Route path = '/red_login' component={red_login}/>
          <Route path = '/test' component={testpage}/>
          <Route render={() => <div className='error'>에러 페이지!!</div>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;