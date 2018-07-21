import {getAll, search} from '../BooksAPI'
import {listBooks} from './listBooks'
import {searchBooks} from './searchBooks'

export function handleInitialData(){
    return(dispatch)=>{
        return getAll()
        .then((books)=>
        {
            dispatch(listBooks(books))
        })
    }
}
export function handleSearchData(squery){
    return(dispatch)=>{
        return search(squery)
        .then((books)=>{
            dispatch(searchBooks(books))
        } 
        
    )
    }
}