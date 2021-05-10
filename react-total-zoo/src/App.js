import React from 'react'; 
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'; 
import AdminPage from './pages/AdminPage'; 
import ZooPage from './pages/ZooPage'; 
import MainPage from './pages/MainPage';
import red_login from './pages/login_redux';
import test from './pages/test copy';
import Head from './components/Head';
import Footer from './components/Footer';
function App(){
  return (
    <>
      <BrowserRouter>
      <div style={{marginTop:'50px'}}>
         <Head/> 
      </div>
        <Switch>
          <Route exact path = '/' component={MainPage} />
          <Route path = '/Admin' component={AdminPage} />
          <Route path = '/Zoo' component={ZooPage} />
          <Route path = '/red_login' component={red_login}/>
          <Route path = '/test2' component={test}/>
          <Route render={() => <div className='error'>에러 페이지!!</div>}/>
        </Switch>
        <div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;