import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSearchData} from '../actions/shared'
import DisplayShelf from './DisplayShelf'
import '../App.css'
import {DebounceInput} from 'react-debounce-input'
class AddBooks extends Component{
    state = {
        squery:''
    }
    updateQuery = (squery) => {
        this.setState(() => ({
            squery: squery.trim()
        }))
        if (squery===''){
        }
        else this.props.dispatch(handleSearchData(squery))
    
        
    }
    render(){
         const squery=this.state.squery
         const books=this.props.searchBooks
          
        return(
            <div>
        
            <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                <DebounceInput type="text" 
                minLength={3}
                debounceTimeout={3000}
                placeholder="Search by title or author" 
                value={squery} 
                onChange={(event)=>this.updateQuery(event.target.value)}
                />
                </div>
            </div>
            <div className="search-books-results">
            <div className="list-books-content">
            <ol className="books-grid">
            {squery!=='' &&(
            books.length>0 &&(
                
                books.map((book)=>
                <li key={book.id}>
                <DisplayShelf 
                book={book}
                />
                </li>
            )
        ))
            }
            </ol>
            </div>
            </div>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    return {
        searchBooks:state.searchBooks
    }
}
export default connect(mapStateToProps) (AddBooks)