import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../utility/addForReadDb";
import { addBookToWishList } from "../../utility/wishListDb";

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

  const handleReadList = (id) => {
    addToStoreReadList(id);
  };

  const handleWishList = (id) => {
    addBookToWishList(id);
  };

  return (
    <div className="flex flex-col md:flex-row bg-base-200 justify-center items-center my-10 rounded-2xl md:gap-6 lg:gap-12">
      <div className="bg-[#21262b]  rounded-2xl flex justify-center">
        <img
          src={image}
          className="rounded-lg shadow-2xl max-w-xs lg:max-w-lg h-[600px]"
        />
      </div>
      <div className="flex flex-col items-start h-full p-8 md:p-0">
        <h1 className="text-3xl lg:text-4xl font-bold my-4">{bookName}</h1>
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
          <button
            onClick={() => handleReadList(bookId)}
            className="btn btn-neutral"
          >
            Mark As Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn btn-accent"
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
