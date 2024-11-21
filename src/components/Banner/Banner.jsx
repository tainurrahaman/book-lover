import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 max-h-xl rounded-xl mt-6 md:mt-12 md:px-14 lg:px-28 md:py-10 lg:py-20">
      <div className="hero-content flex-col md:flex-row-reverse gap-8 md:gap-20">
        <img
          src={bannerImg}
          className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white mt-6 md:mt-12">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
