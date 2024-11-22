import { MdLocationOn } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";

const ListedBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    publisher,
    tags,
    totalPages,
    yearOfPublishing,
    category,
    rating,
  } = book;
  console.log(book);

  return (
    <div className="flex border-blue-900 rounded-2xl border-2 p-6 my-8 gap-6">
      <div>
        <img className="w-[230px] rounded-xl" src={image} alt="Books" />
      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-[24px]">{bookName}</h3>
        <p className="font-medium text-[16px] ">By : {author}</p>
        <div className="flex items-center">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-[16px]">Tag</p>
            <div className="flex">
              {tags.map((tag, idx) => (
                <button key={idx} className="btn btn-xs mr-3  text-green-400">
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MdLocationOn />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <BsPeopleFill />
            <p>Publisher : {publisher}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdContactPage />
            <p>Page {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-start gap-3">
          <p className="rounded-3xl py-2 px-4 bg-[#d6e1ee] text-[#4090f1]">
            Category: {category}
          </p>
          <p className="rounded-3xl py-2 px-4 bg-[#faefde] text-[#f7a730]">
            Ratings: {rating}
          </p>
          <p className="rounded-3xl py-2 px-4 bg-[#23BE0A] text-white">
            View Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
