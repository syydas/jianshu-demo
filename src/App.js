import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/hader';
import Home from './pages/home';
import Detail from './pages/detail';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont'
import store from './store/index'

class App extends Component {
  render () {
    return (
      <div className="APP">
        <GlobalStyle />
        <GlobalIcon />
        <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>  
          </BrowserRouter>
         </div>
        </Provider>
        
      </div>
    );
  }
}

export default App;
