# Week 2 Day 4 Assignment

This project contains three beginner-level JavaScript applications that practice **event handling, form validation, and drag-and-drop functionality**.

## Projects

### 1. Modal System
![how it is shown](https://github.com/markcliff6064/week-2-day-4-assignment/blob/47f56de90cf423bae2aab00a134c46004ed3688d/modal.jpg)
**Files:**

* `modal.html`
* `modal.js`

The modal system contains three **Learn More** buttons.

Each button opens a different modal.

The modal can be closed by:

* Clicking the Close button
* Pressing the Escape key
* Clicking outside the modal

The page scrolling is also disabled while the modal is open.

### 2. Registration Form
![how it is shown](https://github.com/markcliff6064/week-2-day-4-assignment/blob/47f56de90cf423bae2aab00a134c46004ed3688d/form.jpg)
**Files:**

* `form.html`
* `form.js`

The registration form performs real-time validation while the user types.

It validates:

* Name — minimum 2 characters
* Email — must contain `@` and a dot after `@`
* Phone — exactly 10 digits starting with `07` or `01`
* Password — minimum 8 characters, one uppercase letter, and one number

The Register button remains disabled until all fields are valid.

When the form is submitted, the form data is displayed in the browser console as an object.

### 3. Drag-and-Drop Priority List
![how it is shown](https://github.com/markcliff6064/week-2-day-4-assignment/blob/47f56de90cf423bae2aab00a134c46004ed3688d/drag1.jpg)
**Files:**

* `drag.html`
* `drag.js`

This project contains five tasks that can be reordered using drag and drop.

After moving a task, the priority numbers are automatically updated.

It uses the following Drag and Drop API events:

* `dragstart`
* `dragover`
* `drop`
* `dragend`

## Concepts Practiced

* `addEventListener()`
* Click events
* Keyboard events
* Input events
* `event.preventDefault()`
* DOM selection
* DOM manipulation
* Form validation
* Regular expressions
* JavaScript objects
* Drag and Drop API
* `dataTransfer`
* `localStorage` concepts

## Folder Structure

```text
week-2-day-4-assignment/
│
├── modal.html
├── modal.js
│
├── form.html
├── form.js
│
├── drag.html
└── drag.js
```

## How to Run

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open any of the HTML files in a browser.

For example:

```text
modal.html
form.html
drag.html
```

## Technologies Used

* HTML
* JavaScript

## Author

Mark Mukami

## Assignment

Week 2 Day 4 — JavaScript

This project was created for practicing beginner-level JavaScript event handling, validation, and interactive web applications.
