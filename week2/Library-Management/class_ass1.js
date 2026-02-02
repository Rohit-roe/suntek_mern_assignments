// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise
//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books
class Book {
    title;
    author;
    pages;
    isAvailable=true;
    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
    }
    borrow(){
        this.isAvailable=false
    }
    returnBook(){
        this.isAvailable-true
    }
    getInfo(){
        console.log(this.title+" by "+ this.author+" ( "+this.pages+" pages )")
    }
    isLongBook(){
        if(this.pages>300){
            return true
        }else{
            return false
        }
    }
}
// creating book objects
let book1=new Book("Harry Potter","J.K.Rowling",450)
let book2=new Book("The Alchemist","Paulo Coelho",200)
let book3 =new Book("The Hobbit","J.R.R",310)
let book4=new Book("1984","George Orwell",280)
let book5=new Book("Introduction to java","GVR",600)

// i. Display info of all books
book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()

// ii. Borrow 2 books and show their availability status
book1.borrow()
book4.borrow()
console.log("Book1 Availability:",book1.isAvailable)
console.log("Book4 Availability:",book4.isAvailable)
// iii. Return 1 book and show updated status
book4.returnBook()
console.log("Book4 Availability :",book4.isAvailable)
// iv. Count how many books are "long books" (more than 300 pages)
let count=0
if(book1.isLongBook()) count++
if(book2.isLongBook()) count++
if(book3.isLongBook()) count++
if(book4.isLongBook()) count++
if(book5.isLongBook()) count++
console.log("Number of long books:",count)

// v. List all available books
console.log("Available Books:")
if(book1.isAvailable) book1.getInfo()
if(book2.isAvailable) book2.getInfo()
if(book3.isAvailable) book3.getInfo()
if(book4.isAvailable) book4.getInfo()
if(book5.isAvailable) book5.getInfo()
