import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../../api/lib/book";
import { BookData } from "../../../types";
import { CharactersInBook } from "../../../components";

export const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookData>();

  useEffect(() => {
    if (id) {
      getBookById(id)
        .then((response) => {
          console.log(response.data);
          setBook(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div>
      {book && (
        <>
          <h1>{book.name}</h1>
          <div>
            <p>Nombre de pages: {book.numberOfPages}</p>
            <p>
              Date de publication:{" "}
              {new Date(book.released).toLocaleString().split(" ")[0]}
            </p>
            {/*<CharactersInBook characters={book.characters} />*/}
            <p>ISBN: {book.isbn}</p>
          </div>
        </>
      )}
    </div>
  );
};
