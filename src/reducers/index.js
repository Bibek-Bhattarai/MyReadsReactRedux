import { listBooks } from './listBooks'
import { searchBooks } from './searchBooks'
import {combineReducers} from 'redux'

export default combineReducers({
    listBooks,
    searchBooks
})