import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, tags, category, rating } = book;

  return (
    <div className="card bg-base-100 shadow-xl p-6 border border-green-400">
      <figure className="bg-[#d4d8d5] py-8 rounded-2xl">
        <img src={image} className="h-[166px] w-[134px]" alt={bookName} />
      </figure>
      <div className="card-body p-0 mt-6">
        <div>
          {tags.map((tag, idx) => (
            <button key={idx} className="btn btn-xs mr-3  text-green-400">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title font-bold text-[24px] pt-4">{bookName}</h2>
        <p className="font-medium text-[16px] pt-2">By : {author}</p>
        <div className="divider "></div>
        <div className="card-actions justify-between items-center font-medium text-[16px]">
          <div className="text-xl">{category}</div>
          <div className="btn">
            <Link to={`/books/${bookId}`}>See Details</Link>
          </div>
          <div className=" flex items-center justify-center gap-1 text-xl">
            <div>{rating}</div>

            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
