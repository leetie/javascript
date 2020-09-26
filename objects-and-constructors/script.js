function Book(title, author, numPages, read = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return this.title + " " + "by" + " " + this.author + ", " + this.numPages + " pages, " + (this.read == false ? "not read yet." : "read")
    }
}

const bookOne = new Book("Homeland", "R.A. Salvatore", "352", true);

console.log(bookOne.title);
console.log(bookOne.info());