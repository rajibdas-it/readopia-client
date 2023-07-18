// const filterOption = {
//   page: null,
//   genre: null,
//   publicationYear: null,
//   search: null,
// };
// console.log(filterOption);

// if (filterOption === null) {
//   console.log("/book");
// } else {
//   const queryString = Object.entries(filterOption)
//     .filter(([key, value]) => value !== null)
//     .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//     .join("&");

//   console.log(queryString.length > 0 ? `book/${queryString}` : "/book");
// }

function buildQueryString(filterOption) {
  if (filterOption === null) {
    return "/book";
  } else {
    const queryString = Object.entries(filterOption)
      .filter(([key, value]) => value !== null)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    return queryString.length > 0 ? `/${queryString}` : "/book";
  }
}

// Example usage:
const filterOption = {
  page: null,
  genre: "Dystopian",
  publicationYear: "1997",
  search: "tagore",
};
const queryString = buildQueryString(filterOption);
console.log(queryString);
