import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooksSearch extends Component {

    constructor(props) {
      super(props)
      this.books = this.props.books
      this.showingSearchBook = this.props.showingSearchBook
      this.updateBookShelf = this.props.updateBookShelf.bind(this)
    }

    static propTypes = {
        books: PropTypes.array.isRequired,
        showingSearchBook: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render(){

        const { books, showingSearchBook, updateBookShelf } = this.props

        let arrayOfCurrentlyReading = []
        let arrayOfWantToRead = []
        let arrayOfRead = []
        let arrayOfNone = []

        let searchBooks = []


          searchBooks = showingSearchBook.map(function(book){
              let returnBook = book
              books.forEach(function(bookFromParent){
                if(book.id === bookFromParent.id){
                  returnBook = bookFromParent
                  return
                }
              })
              return returnBook
          })

        searchBooks.forEach(function(book){
          if(book.shelf === "currentlyReading"){
            arrayOfCurrentlyReading.push(book)
          } else if (book.shelf === "wantToRead"){
            arrayOfWantToRead.push(book)
          } else if (book.shelf === "read"){
            arrayOfRead.push(book)
          } else {
            arrayOfNone.push(book)
          }
        })

        return (

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {arrayOfCurrentlyReading.map(
                      (book, idx) =>
                      <li key={idx}>
                        <Book book={book} updateBookShelf={this.updateBookShelf}/>
                      </li>
                    )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {arrayOfWantToRead.map(
                        (book, idx) =>
                        <li key={idx}>
                          <Book book={book} updateBookShelf={this.updateBookShelf}/>
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {arrayOfRead.map(
                        (book, idx) =>
                        <li key={idx}>
                          <Book book={book} updateBookShelf={this.updateBookShelf}/>
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">None</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {arrayOfNone.map(
                        (book, idx) =>
                        <li key={idx}>
                          <Book book={book} updateBookShelf={this.updateBookShelf}/>
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

        )
    }

}

export default ListBooksSearch