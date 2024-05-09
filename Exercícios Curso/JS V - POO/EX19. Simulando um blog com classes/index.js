const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...");

post.addComment("Isaac", "Muito bom!");
post.addComment("Lucas", "Achei interessante.");

console.log(john);
console.log(post);

//   Author {
//     name: 'John Doe',
//     posts: [
//       Post {
//         title: 'Título do Post',
//         body: 'Lorem ipsum dolor sic amet ...',
//         author: [Circular *1],
//         comments: [Array],
//         createdAt: 2024-02-14T01:53:20.345Z
//       }
//     ]
//   }

//   Post {
//     title: 'Título do Post',
//     body: 'Lorem ipsum dolor sic amet ...',
//     author: Author { name: 'John Doe', posts: [ [Circular *1] ] },
//     comments: [
//       Comment {
//         username: 'Isaac',
//         content: 'Muito bom!',
//         createdAt: 2024-02-14T01:53:20.345Z
//       },
//       Comment {
//         username: 'Lucas',
//         content: 'Achei interessante.',
//         createdAt: 2024-02-14T01:53:20.345Z
//       }
//     ],
//     createdAt: 2024-02-14T01:53:20.345Z
