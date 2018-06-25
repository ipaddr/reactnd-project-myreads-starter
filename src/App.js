import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books : [],
      query : '',
      showingSearchBook : []
    }

    this.updateBookShelf = this.updateBookShelf.bind(this)
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookShelf = (book, shelf) => {
    debugger
    this.setState((prevState)=>({
      books: prevState.books.map(function(element){
          if(element.title === book.title){
            element = book;
            element.shelf = shelf;
            return element
          } else {
            return element;
          }
      }
      )
    }))
    BooksAPI.update(book, shelf)
  }

  updateQuery = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        if(books){
          this.setState({query: query, showingSearchBook : books})
        } else {
          this.setState({query: query, showingSearchBook : []})
        }
      })
    } else {
      this.setState({query: query, showingSearchBook : []})
    }

  }

  render() {

    return (
      <div className="app">
        <Route path="/search" render={ () => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text"
                  placeholder="Search by title or author"
                  value = {this.state.query}
                  onChange = {(event)=> this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <ListBooks books={this.state.showingSearchBook} updateBookShelf={this.updateBookShelf}/>
              </ol>
            </div>
          </div>
        )}/>

        <Route path="/" exact render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks books={this.state.books} updateBookShelf={this.updateBookShelf}/>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
