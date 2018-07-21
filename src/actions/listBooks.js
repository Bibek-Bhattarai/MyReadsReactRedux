export const LIST_BOOKS='LIST_BOOKS'

export function listBooks(books){
    return{
        type:LIST_BOOKS,
        books,
    }
}