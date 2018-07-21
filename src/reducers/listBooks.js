import {LIST_BOOKS} from '../actions/listBooks'

export function listBooks(state=[],action){
    switch(action.type){
        case LIST_BOOKS:
        return action.books
        
        default:
        return state
    }
}