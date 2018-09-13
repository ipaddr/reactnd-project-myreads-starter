import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooksSearch extends Component {

    constructor(props) {
      super(props)

      this.showingSearchBook = this.props.showingSearchBook
      this.updateBookShelf = this.props.updateBookShelf.bind(this)
    }

    static propTypes = {
        showingSearchBook: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render(){

        const { showingSearchBook, updateBookShelf } = this.props

        let arrayOfCurrentlyReading = []
        let arrayOfWantToRead = []
        let arrayOfRead = []
        let arrayOfNone = []

        showingSearchBook.map(
          (book) =>
            book.shelf === "currentlyReading" ? arrayOfCurrentlyReading.push(book) :
            book.shelf === "wantToRead" ? arrayOfWantToRead.push(book) :
            book.shelf === "read" ? arrayOfRead.push(book) :
            arrayOfNone.push(book)
        )

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