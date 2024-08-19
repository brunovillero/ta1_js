function getTheTitles(books){
    return books.map(book => book.title);
}

const books = [
    {
        title: "Book 1",
        author: "Author 1"
    },
    {
        title: "Book 2",
        author: "Author 2"
    },
    {
        title: "Book 3",
        author: "Author 3"
    },
    {
        title: "Book 4",
        author: "Author 4"
    }
]

console.log(getTheTitles(books))