const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

function RemoveBookFromLibrary(id) {
    const idx = myLibrary.findIndex(b=>b.id===id);
    if(idx !== -1) myLibrary.splice(idx, 1);
}

addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 796, true);
addBookToLibrary('One Hundred Years of Solitude', 'Gabriel García Márquez', 417, false);
addBookToLibrary('Meditations', 'Marcus Aurelius', 254, true);
addBookToLibrary('The Name of the Wind', 'Patrick Rothfuss', 662, false);

function renderLibrary() {
    const grid = document.getElementById('library-grid');
    grid.innerHTML = '';

    if(myLibrary.length == 0) {
        grid.innerHTML = `
        <div id="empty-state">
            <p>Your shelves await.</p>
            <p>Add your first book to get started.</p>
        </div>`;
        updateStats();
        return;
    }

    myLibrary.forEach(book => {
        const card = document.createElement('article');
        card.className = `book-card ${book.read ? 'read' : 'unread'}`;
        card.dataset.id = book.id;

        card.innerHTML = `
          <div class="book-title">${escHtml(book.title)}</div>
          <div class="book-author">by ${escHtml(book.author)}
            <span class="read-badge ${book.read ? 'read' : 'unread'}">${book.read ? 'Read' : 'Unread'}</span>
          </div>
          <div class="book-meta">
            <span>📖 ${book.pages ? book.pages + ' pp.' : '—'}</span>
          </div>
          <div class="card-actions">
            <button class="btn-toggle" data-id="${book.id}">${book.read ? 'Mark Unread' : 'Mark Read'}</button>
            <button class="btn-remove" data-id="${book.id}">Remove</button>
          </div>`;
 
        grid.appendChild(card);
    });

    updateStats();
}

function updateStats() {
    const total = myLibrary.length;
    const read = myLibrary.filter(b=>b.read).length;
    document.getElementById('stats').textContent = `${total} book${total !==1 ? 's' : ''} . ${read} read`;
}

function escHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}