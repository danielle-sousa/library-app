import React from "react";

const Bookslist = (props) => {
    return (
        <>
            {props.books.map((book, index) => 
            <div className='justify-content-start m-3 col-lg-3'>
                <img className='img-fluid book-img d-block mx-auto' src={book.cover_picture} alt="Book cover"></img>
                <span className='book-title d-block mt-4'>{book.name}</span>
                <span className='book-subtitle d-block'>{book.author}</span>
                <span className='book-subtitle d-block'>{book.category}</span>
            </div>
            )
            }
            
        </>
    )
}

export default Bookslist;