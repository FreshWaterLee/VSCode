import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import showTable from './pages/showData'; 
import transCom from './component/gototable'; 
import FakeH from './component/gotoSlide'
function App(){
  return (
    <>
      <BrowserRouter>
      <div style={{marginTop:'50px'}}>
      </div>
        <Switch>
          <Route exact path ='/' component={FakeH}/>
          <Route path = '/tras' component={transCom} />
          <Route path = '/showTable' component={showTable}/>
          <Route render={() => <div className='error'>에러 페이지!!</div>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;