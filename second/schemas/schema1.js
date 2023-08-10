const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { author, book } = require("../models/model1");
const bookSchema = new GraphQLObjectType({
  name: "books",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    author: {
      type: autherSchema,
      resolve(parent, args) {
        return author.findById({ _id: parent.author });
      },
    },
  }),
});

const autherSchema = new GraphQLObjectType({
  name: "authers",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    books: {
      type: new GraphQLList(bookSchema),
      resolve(parent) {
        return book.find({ author: parent._id });
      },
    },
  }),
});
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: autherSchema,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve(parent, { name, age }) {
        return author.create({
          name,
          age,
        });
      },
    },
    addBook: {
      type: bookSchema,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        genre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        author: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, { name, genre, author }) {
        return book.create({ name, genre, author });
      },
    },
  },
});

const Rootquery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    book: {
      type: bookSchema,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return book.find({ name: id });
      },
    },
    author: {
      type: autherSchema,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return author.find({ name: id });
      },
    },
    allBooks: {
      type: new GraphQLList(bookSchema),
      resolve() {
        return book.find({});
      },
    },
    allAuthors: {
      type: new GraphQLList(autherSchema),
      resolve() {
        return author.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: Rootquery, mutation: mutation });
