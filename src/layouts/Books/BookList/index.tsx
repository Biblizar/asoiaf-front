import React, { useState, useEffect } from "react";
import { getAllBooks } from "../../../api/lib/book";
import { BookData } from "../../../types";
import { BooksContainer, StyledBookList, BookStyled } from "../../../styles";

export const BookList = () => {
  const [books, setBooks] = useState<Array<BookData>>();

  useEffect(() => {
    getAllBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
    <StyledBookList>
      {books?.map((book) => {
        console.log(book);
        return (
          book.name && (
            <BooksContainer key={book.url}>
              <BookStyled
                className="nav-link"
                to={book.url.substring(book.url.lastIndexOf('/')+1)}
              >
                {book.name}
              </BookStyled>
            </BooksContainer>
          )
        );
      })}
    </StyledBookList>
    </>
  );
};
