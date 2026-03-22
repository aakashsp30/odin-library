function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readstatus = this.read ? "read" : "not read";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readstatus}`;
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());