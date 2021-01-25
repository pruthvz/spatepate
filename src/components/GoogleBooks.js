import React, { useState } from 'react'
import axios from 'axios';


import "./styles/Book.css"

function GoogleBooks() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyADCD-EwtwhNh0vr0QFq8cSKeJZnp_Nsn4")
   
    const handleChange = e => {
        const book = e.target.value;
        setBook(book);    
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
        .then(data =>{
            setResult(data.data.items)
            console.log(data);
        })
    
    }


    return (
        <div>
        <div className="container  justify-content-center">
            <div className="card mt-5 p-4">
                <h4 className="text mb-4 text-center">Search for any books</h4>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3"> 
                        <input type="search"
                        onChange={handleChange}
                        placeholder="Search for your programming book..."
                        className="form-control"
                        autoComplete="off"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit"><i className="fas fa-search"></i></button></div>
                    </div> 
                </form>
            </div>
            {result.map(book =>(
                <a href={book.volumeInfo.previewLink} >
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                </a>
                ))}
         
        </div>
    </div>
    )
}

export default GoogleBooks
