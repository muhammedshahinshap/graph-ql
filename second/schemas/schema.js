// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLSchema,
//   GraphQLID,
//   GraphQLList,
//   GraphQLInt,
// } = require("graphql");
// // dummy data
// let data = [
//   {
//     id: "1",
//     name: "yoyo",
//     genre: "hai",
//   },
//   {
//     id: "2",
//     name: "yoyoyo",
//     genre: "haihai",
//   },
//   {
//     id: "3",
//     name: "yoyoyoyo",
//     genre: "ha",
//   },
// ];

// let auther = [
//   {
//     id: "1",
//     name: "harry",
//     genre: "hai",
//     fk: "2",
//   },
//   {
//     id: "2",
//     name: "potter",
//     genre: "hai",
//     fk: "2",
//   },
//   {
//     id: "3",
//     name: "harry potter",
//     genre: "hai",
//     fk: "3",
//   },
//   {
//     id: "3",
//     name: "chumma",
//     genre: "hai",
//     fk: "4",
//   },
// ];

// const bookSchema = new GraphQLObjectType({
//   name: "books",
//   fields: () => ({
//     id: {
//       type: GraphQLID,
//     },
//     name: {
//       type: GraphQLString,
//     },
//     genre: {
//       type: GraphQLString,
//     },
//     auther: {
//       type: new GraphQLList(autherSchema),
//       resolve(parent, args) {
//         return auther.filter((item) => item.fk == parent.id);
//       },
//     },
//   }),
// });

// const autherSchema = new GraphQLObjectType({
//   name: "authers",
//   fields: () => ({
//     id: {
//       type: GraphQLID,
//     },
//     name: {
//       type: GraphQLString,
//     },
//   }),
// });

// const Rootquery = new GraphQLObjectType({
//   name: "rootQuery",
//   fields: {
//     book: {
//       type: bookSchema,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, { id }) {
//         // query to get data from db
//         return data.find((item) => item.id == id);
//       },
//     },
//     auther: {
//       type: autherSchema,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, { id }) {
//         return auther.find((item) => item.id == id);
//       },
//     },
//     allBooks: {
//       type: new GraphQLList(bookSchema),
//       resolve() {
//         return data;
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({ query: Rootquery });
