import { useQuery, useMutation } from "@apollo/client";
import { getBooks, addAuthor } from "./queries/queries";
export default function Books() {
  const { loading, error, data }: any = useQuery(getBooks);
  return (
    <div>
      <ul>
        Datas
        {data?.allBooks.map((item: any) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
