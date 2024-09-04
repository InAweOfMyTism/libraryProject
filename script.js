const myLibrary = [];
const bookshelf = document.getElementById('container');


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
    this.displayBook = function () {


        this.bookCard = document.createElement('div');
        this.bookCard.classList.add('book card');
        

        this.cardTitle = document.createElement('h1');
        this.cardTitle.classList.add('title');
        this.cardTitle.textContent = this.title;

        this.cardImg = document.createElement('img');
        this.cardImg.classList.add('cover');

        
        this.cardAuthor = document.createElement('h2');
        this.cardAuthor.classList.add('author');
        this.cardAuthor.textContent = `by ${this.author}`;

        
        this.cardGenre = document.createElement('h3');
        this.cardGenre.classList.add('genre');
        this.cardGenre.textContent = this.genre;
        
        this.cardWordCount = document.createElement('h3');
        this.cardWordCount.classList.add('wordCount');
        this.cardWordCount.textContent = `${this.wordCount} words`
        
        this.readButton = document.createElement('button');
        this.readButton.classList.add('read_toggle');


        this.bookCard.appendChild('cardTitle');
        this.bookCard.appendChild('cardAuthor');
        this.bookCard.appendChild('cardGenre');
        this.bookCard.appendChild('cardWordCount');
        this.bookCard.appendChild('readButton');

        bookshelf.appendChild('bookCard');
    }
}

function addBookToLibrary(title, author, genre, wordCount) {
    myLibrary.push(new Book(title, author, genre, wordCount));
}