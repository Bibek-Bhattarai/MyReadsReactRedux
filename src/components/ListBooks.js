import React , {Component} from 'react'
import {connect} from 'react-redux'
import DisplayShelf from './DisplayShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component{
     render(){
         
         //console.log('bdjjjd',this.props)
         const books= this.props.listBooks
        return(
            <div className="app">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div className="bookshelf">
                          <h2 className="bookshelf-title">Currently Reading </h2>
                          <ol className="books-grid">
                          {books.map((book)=>(
                            <li key={book.id}>
                            {book.shelf==='currentlyReading'&&
                            (
                            <DisplayShelf book={book}/>
                            )
                          }
                            </li>
                          ))}
                          </ol>  
                      </div>
                      <div className="bookshelf">
                          <h2 className="bookshelf-title">Read</h2>
                          <ol className="books-grid">
                          {books.map((book)=>(
                            <li key={book.id}>
                            {book.shelf==='read'&&
                            (
                                <DisplayShelf 
                                updateList={this.updateList}
                                book={book}/> 
                            )
                          }
                            </li>
                          ))}
                          </ol>  
                      </div>
                      <div className="bookshelf">
                          <h2 className="bookshelf-title">Want To Read </h2>
                          <ol className="books-grid">
                          {books.map((book)=>(
                            <li key={book.id}>
                            {book.shelf==='wantToRead'&&
                            (
                                <DisplayShelf updateList={this.updateList} book={book}/>
                            )
                          }
                            </li>
                          ))}
                          </ol>  
                      </div> 
                      <div className="open-search">
              <Link
              to='/AddBooks'
              >
              Add a book</Link>
            </div> 
            </div>    
        </div>
        )
    }
}
function mapStateToProps(state){
    return {
        listBooks:state.listBooks 
    }
}
export default  connect(mapStateToProps) (ListBooks)