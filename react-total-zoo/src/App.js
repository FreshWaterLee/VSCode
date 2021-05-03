import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import AdminPage from './pages/AdminPage'; 
import ZooPage from './pages/ZooPage'; 
import MainPage from './pages/MainPage';
// import LoginPage from './pages/LoginPage';
import testpage from './pages/test';
import red_login from './pages/login_redux';
import lclass from './pages/lclass';
import test from './pages/test copy';
function App(){
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component={MainPage} />
          <Route path = '/Admin' component={AdminPage} />
          <Route path = '/Zoo' component={ZooPage} />
          {/* <Route path = '/red_login' component={red_login}/> */}
          <Route path = '/test' component={testpage}/>
          <Route path = '/test2' component={test}/>
          <Route path = '/lclass' component={lclass}/>
          <Route render={() => <div className='error'>에러 페이지!!</div>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;