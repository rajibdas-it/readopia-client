// // const filterOption = {
// //   page: null,
// //   genre: null,
// //   publicationYear: null,
// //   search: null,
// // };
// // console.log(filterOption);

// // if (filterOption === null) {
// //   console.log("/book");
// // } else {
// //   const queryString = Object.entries(filterOption)
// //     .filter(([key, value]) => value !== null)
// //     .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
// //     .join("&");

// //   console.log(queryString.length > 0 ? `book/${queryString}` : "/book");
// // }

// function buildQueryString(filterOption) {
//   if (filterOption === null) {
//     return "/book";
//   } else {
//     const queryString = Object.entries(filterOption)
//       .filter(([key, value]) => value !== null)
//       .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//       .join("&");

//     return queryString.length > 0 ? `/${queryString}` : "/book";
//   }
// }

// // Example usage:
// const filterOption = {
//   page: null,
//   genre: "Dystopian",
//   publicationYear: "1997",
//   search: "tagore",
// };
// const queryString = buildQueryString(filterOption);
// console.log(queryString);

import React, { useState } from "react";

const booksData = [
  // The array of book objects you provided
  // ... (the same data you posted)
];

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    // Filter the books based on searchQuery, genreFilter, and yearFilter
    const searchResult = booksData.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      const genre = book.genre.toLowerCase();
      const publicationYear = parseInt(book.publicationYear, 10);

      const titleMatch = title.includes(searchQuery.toLowerCase());
      const authorMatch = author.includes(searchQuery.toLowerCase());
      const genreMatch = genre.includes(searchQuery.toLowerCase());
      const genreFilterMatch =
        genreFilter === "" || genre === genreFilter.toLowerCase();
      const yearFilterMatch =
        isNaN(yearFilter) || publicationYear === parseInt(yearFilter, 10);

      return (
        (titleMatch || authorMatch || genreMatch) &&
        genreFilterMatch &&
        yearFilterMatch
      );
    });

    // Use the searchResult array as needed (e.g., store it in state, display it in UI, etc.)
    console.log(searchResult);
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="searchQuery">Search by Title, Author, or Genre:</label>
      <input
        type="text"
        id="searchQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        required
      />

      <label htmlFor="genreFilter">Filter by Genre:</label>
      <select
        id="genreFilter"
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
      >
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Dystopian">Dystopian</option>
        {/* Add more genre options here */}
      </select>

      <label htmlFor="yearFilter">Filter by Publication Year:</label>
      <select
        id="yearFilter"
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
      >
        <option value="">All Years</option>
        <option value="1950">1950</option>
        <option value="1960">1960</option>
        {/* Add more year options here */}
      </select>

      <button type="submit">Search</button>
    </form>
  );
};

export default BookSearch;
