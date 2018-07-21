import {SEARCH_BOOKS} from '../actions/searchBooks'

export function searchBooks(state=[],action){
    switch(action.type){
        case SEARCH_BOOKS:
        return action.books

        default:
        return state
    }
}