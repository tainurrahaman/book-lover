const Book = ({ book }) => {
  const { bookName, image, author } = book;

  return (
    <div className="card bg-base-100 shadow-xl p-6 border border-green-400">
      <figure className="bg-[#696767] py-8 rounded-2xl">
        <img src={image} className="h-[166px] w-[134px]" alt={bookName} />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
