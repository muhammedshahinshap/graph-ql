import { useQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { getBooks, addAuthor } from "./queries/queries";

function Add() {
  const [addauthor, { loading, error, data }]: any = useMutation(addAuthor, {
    refetchQueries: [{ query: getBooks }],
  });
  console.log(data);

  useEffect(() => {
    addauthor({ variables: { name: "muhammedshahinshaP", age: 10 } });
  }, []);

  return <div>Add</div>;
}

export default Add;
