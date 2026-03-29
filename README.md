# 📚 Library App

A simple browser-based library manager built with vanilla HTML, CSS, and JavaScript. Users can add books, track reading status, and remove books from their personal collection.

---

## Features

- Add new books via a modal form
- Display all books as styled cards
- Mark books as read or unread
- Remove books from the library
- Each book has a unique stable ID generated with `crypto.randomUUID()`
- Responsive grid layout that adapts to screen size

---

## Concepts Practised

- Constructor functions and prototype methods
- DOM manipulation with `createElement` and `appendChild`
- Event delegation using a single listener on the parent grid
- Data attributes (`data-id`) to link DOM elements to data objects
- Modal pattern built from scratch with HTML, CSS, and JavaScript
- CSS Grid with `auto-fill` and `minmax` for a responsive card layout
- CSS custom properties (variables) for consistent theming
- `crypto.randomUUID()` for generating unique identifiers
- XSS prevention using an `escHtml` helper function

---