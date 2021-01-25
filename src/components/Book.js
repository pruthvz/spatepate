import React, {useState} from 'react'
import axios from 'axios';
import "./styles/Book.css"


function Book() {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState({ items: [] });
    const onInputChange = e => {
      setSearchTerm(e.target.value);
    };
  
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  
    const fetchBooks = async () => {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    };
  
    const onSubmitHandler = e => {
      e.preventDefault();
      fetchBooks();
    };
  
    const bookAuthors = authors => {
      if (authors.length <= 2) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    };

    return (
    <div>
    <section className="book-section">
        <div class="container  justify-content-center">
        <div class="card mt-5 p-4">
            <h4 class="text mb-4 text-center">Search for any books</h4>
            <form onSubmit={onSubmitHandler}>
                <div class="input-group mb-3"> <input type="search"
                    placeholder="Search for your programming book..."
                    value={searchTerm}
                    onChange={onInputChange}
                    className="form-control"/>
                    <div class="input-group-append"><button class="btn btn-primary" type="submit"><i class="fas fa-search"></i></button></div>
                </div> 
            </form>
        </div>
    </div>
      

      <ul className="row container-fluid">
        {books.items.map((book, index) => {
          return (
            <li key={index}>
              <div className="book-cover d-flex justify-content-center">
                <img
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${
                    book.id
                  }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <h5>{bookAuthors(book.volumeInfo.authors)}</h5>
                  <p>{book.volumeInfo.publishedDate}</p>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    
    </section>


    </div>
    )
}

export default Book
