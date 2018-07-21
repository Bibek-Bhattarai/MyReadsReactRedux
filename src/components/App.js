import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import '../App.css'
import AddBooks from './AddBooks'
 
class App extends Component {
   
  componentDidMount(){
    this.props.dispatch(handleInitialData())   
  }
   render(){
     return(

       <div>
         <Route exact path ='/' component={ListBooks} />     
         <Route path ='/AddBooks' component={AddBooks} />  
         </div>
     )
   }
 }
 export default connect()(App)