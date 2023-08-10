import { gql } from "@apollo/client";
const getBooks = gql`
  {
    allBooks {
      _id
      name
      author {
        name
      }
    }
  }
`;
const addAuthor = gql`
  mutation addAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
    }
  }
`;

export { getBooks, addAuthor };
