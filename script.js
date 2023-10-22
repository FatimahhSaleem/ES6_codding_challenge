"use strict"
// ES6
// codding challenges

//   Map Method

//1. Write a program that takes an array of numbers as an argument and uses the map method to return a new array containing the square of each number in the original array.

// let array=[5,7,2,6,7,23,85]

// let result=array.map(sqaure=>{
//     return  sqaure*sqaure;
// })

// console.log(result);



// 2. Write a program that takes an array of objects representing books, with properties for title and author, and uses the map method to return a new array containing just the titles of the books.


// let books=[
//   {
//     title: "fairy_tale",
//     author: "Lewis Carroll"
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: " J.K. Rowling"
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee"
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald"
//   },
//   {
//     title: "The Hobbi",
//     author: " J.R.R. Tolkien"
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee"
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee"
//   }
// ];



// let newarray=books.map((book)=>{
//     return (book.title)
// });

// console.log("New Array of book titles  =",newarray);




// Filter Method


// 1. Write a program that takes an array of numbers as an argument and uses the filter method to return a new array containing only the even numbers from the original array.


// let array=[3,5,6,8,9,2,4,24,46,67]
// let newarray=[];
// let even_num=array.filter((num)=>(num% 2 === 0))
// newarray=even_num;
// console.log(newarray);


// 2. Write a program that takes an array of objects representing books, with properties for title and author, and uses the filter method to return a new array containing only the books with more than 300 pages.


//  let books=[
//   {
//     title: "fairy_tale",
//     author: "Lewis Carroll",
//     pages: 2560
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: " J.K. Rowling",
//     pages: 150
      
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages: 270
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     pages: 370
//   },
//   {
//     title: "The Hobbi",
//     author: " J.R.R. Tolkien",
//     pages: 403
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages:1028
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages:250
//   }
// ];

// let newarray=books.filter((page)=>{
//   return (page.pages>300)
// });
// console.log(newarray)




// Reduce Method


// 1. Write a program that takes an array of numbers as an argument and  uses the reduce method to return the sum of all the numbers in the array.



// let array=[2,4,6,4,2,56,7,7,4]

// const newarray=array.reduce((num1,num2)=>{
//   return num1+num2;
// })
// console.log(newarray);


// 2. Write a program that takes an array of objects representing books, with properties for title and author, and uses the reduce method to return the total number of pages in all the books.


//  let books=[
//   {
//     title: "fairy_tale",
//     author: "Lewis Carroll",
//     pages: 2560
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: " J.K. Rowling",
//     pages: 150

//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages: 270
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     pages: 370
//   },
//   {
//     title: "The Hobbi",
//     author: " J.R.R. Tolkien",
//     pages: 403
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages:1028
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages:250
//   }
// ];


// const newarray=(book1,book2)=>{
//   return(book1+book2.pages)};
// let result=books.reduce(newarray,0)
// console.log(result)




  