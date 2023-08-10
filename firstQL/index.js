const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
// const { createHandler } = require("graphql-http/lib/use/express");
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "hello",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "hai",
      },
    }),
  }),
});
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(3000);
