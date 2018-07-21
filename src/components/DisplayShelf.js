import React, {Component} from 'react'
import {update} from '../BooksAPI'
import {connect} from 'react'
 
class DisplayShelf extends  Component{
  
    render(){
      console.log('asdfghgfdsasdf',this.props)
      const showbook=this.props
        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${showbook.book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select name="taskOption" onChange=
                {
                  (event)=>{
                  update(showbook.book,event.target.value)
                  .then((book) => 
                  {this.setState(() => 
                  book
                  )    
              }
               ) } 
               
               
             }
                >
                <option value="move" disabled>Move to...</option>
                <option value="none">None</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="currentlyReading">Currently Reading</option>
                </select>    
              </div>
            </div>
            <div className="book-title">{showbook.book.title}</div>
            <div className="book-authors">{showbook.book.authors}</div>
          </div>
        )
    }

}
 
 
export default DisplayShelf