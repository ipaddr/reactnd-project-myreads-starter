import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

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
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) => updateBookShelf(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map(
                (name, idx) => <div className="book-authors" key={idx}>{name}</div>
              )}
            </div>

        )
    }

}

export default Book