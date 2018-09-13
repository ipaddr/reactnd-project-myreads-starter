import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    constructor(props) {
      super(props)
      this.books = this.props.book
      this.updateBookShelf = this.props.updateBookShelf.bind(this)
    }

    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    update = (value) => {
      this.prop.updateBookShelf(this.props.book, value)
    }

    render(){

        const { book, updateBookShelf } = this.props

        return (

            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) => this.updateBookShelf(this.props.book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" selected={this.props.book.shelf == "currentlyReading" ? "selected" : ""}>Currently Reading</option>
                    <option value="wantToRead" selected={this.props.book.shelf == "wantToRead" ? "selected" : ""}>Want to Read</option>
                    <option value="read" selected={this.props.book.shelf == "read" ? "selected" : ""}>Read</option>
                    <option value="none" selected={this.props.book.shelf == undefined ? "selected" : ""}>None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              {
                  this.props.book.authors != null ? this.props.book.authors.map(
                    (name, idx) => <div className="book-authors" key={idx}>{name}</div>
                  ) : null
              }
            </div>

        )
    }

}

export default Book