import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
    rating,
  } = book;

  return (
    <div className="grid grid-cols-2  bg-base-200 justify-center items-center my-10 rounded-2xl gap-12">
      <div className="bg-[#21262b] py-14 rounded-2xl flex justify-center">
        <img
          src={image}
          className="rounded-lg shadow-2xl max-w-xs md:max-w-sm lg:max-w-lg h-[600px]"
        />
      </div>
      <div className="flex flex-col items-start h-full">
        <h1 className="text-4xl font-bold my-4">{bookName}</h1>
        <p className="text-[20px] font-medium mb-6">By :{author}</p>
        <p className="text-[20px] font-medium mb-5">{category}</p>
        <hr />
        <p className="mb-6">
          <span className="font-bold text-[16px]">Review: </span>
          {review}
        </p>
        <div className="flex gap-4 mb-6">
          <p className="font-bold text-[16px]">Tag</p>
          <div>
            {tags.map((tag, idx) => (
              <button key={idx} className="btn btn-xs mr-4  text-green-400">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex gap-14 mb-8">
          <div className="space-y-2">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </div>
          <div className="font-bold space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex mb-5 gap-4">
          <button className="btn btn-neutral">Read</button>
          <button className="btn btn-accent">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
