import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom'

const store =createStore(reducer,middleware)

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <Route component={App}/>
    </Provider>
    </BrowserRouter>
, document.getElementById('root'))
