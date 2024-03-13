import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {store} from './app/Store';
import {Provider} from 'react-redux';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'


if(process.env.NODE_ENV === 'production'){
  disableReactDevTools()
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path='/*' element={<App/>}></Route>
          </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
