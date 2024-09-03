const book = {
    title: '',
    author: '',
    genre: '',
    length: '',
    read: false
}

function Book(title, author, genre, wordCount) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.wordCount = wordCount;
    this.read = false;
    this.readBook = function () {
        this.read = true;
    };
    this.forgetBook = function() {
        this.read = false;
    };
    this.info = function () {
        if (this.read === true)
            return `${title}, by ${author}, ${wordCount} words, finished`;
        else 
            return `${title}, by ${author}, ${wordCount} words, unread`;
            
    }
}