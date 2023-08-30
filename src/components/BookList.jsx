import React from "react";
import Book from "../assets/book.png";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function BookList() {
  let { data: books, loading, error } = useFetch("http://localhost:3001/books");

  if (error) {
    <p>{error}</p>;
  }
  return (
    <div>
      {loading && <p>Library Page is loading...</p>}
      {!!books && (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <small>{book.id}</small>
              <div className="p-4 border border-1 rounded">
                <img src={Book} alt="" className="rounded" />
                <div className=" text-center space-y-2 mt-3">
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>
                  {/* genres*/}
                  <div className="flex flex-wrap">
                    {book.categories.map((genre) => (
                      <span
                        className="mx-1 my-1 rounded-full bg-blue-500 text-white px-2 py-2 text-sm"
                        key={genre}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
