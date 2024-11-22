import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  return (
    <div>
      <h2>BookDetail {bookId}</h2>
    </div>
  );
};

export default BookDetail;
